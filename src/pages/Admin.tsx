import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { categories } from '@/data/categories';
import { addProducts, clearAllProducts, products } from '@/data/products';
import { toast } from 'sonner';
import AdminHeader from '@/components/admin/AdminHeader';
import ImportForm from '@/components/admin/ImportForm';
import ImportPreviewList from '@/components/admin/ImportPreviewList';
import ImportInstructions from '@/components/admin/ImportInstructions';
import { PreviewProduct } from '@/components/admin/types';

const PREVIEW_STORAGE_KEY = 'admin_preview_products';

export default function Admin() {
  const [categoryId, setCategoryId] = useState('');
  const [subcategoryId, setSubcategoryId] = useState('');
  const [subSubcategoryId, setSubSubcategoryId] = useState('');
  const [importData, setImportData] = useState('');
  const [importing, setImporting] = useState(false);
  const [importMode, setImportMode] = useState<'manual' | 'csv'>('csv');
  const [previewProducts, setPreviewProducts] = useState<PreviewProduct[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterManufacturer, setFilterManufacturer] = useState('all');
  const [filterSearch, setFilterSearch] = useState('');
  const [showDuplicates, setShowDuplicates] = useState(true);

  const checkDuplicates = (productsToCheck: PreviewProduct[]) => {
    const existingSkus = new Set(products.map(p => p.sku.toLowerCase()));
    return productsToCheck.map(product => ({
      ...product,
      isDuplicate: existingSkus.has(product.sku.toLowerCase())
    }));
  };

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(PREVIEW_STORAGE_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        setPreviewProducts(data.products || []);
        setShowPreview(data.products?.length > 0);
        setCategoryId(data.categoryId || '');
        setSubcategoryId(data.subcategoryId || '');
        setSubSubcategoryId(data.subSubcategoryId || '');
      }
    } catch (e) {
      console.error('Failed to restore preview:', e);
    }
  }, []);

  useEffect(() => {
    if (previewProducts.length > 0) {
      try {
        sessionStorage.setItem(PREVIEW_STORAGE_KEY, JSON.stringify({
          products: previewProducts,
          categoryId,
          subcategoryId,
          subSubcategoryId
        }));
      } catch (e) {
        console.error('Failed to save preview:', e);
      }
    }
  }, [previewProducts, categoryId, subcategoryId, subSubcategoryId]);

  const selectedCategory = categories.find(c => c.id === categoryId);
  const subcategories = selectedCategory?.subcategories || [];
  const selectedSubcategory = subcategories.find(s => s.id === subcategoryId);
  const subSubcategories = selectedSubcategory?.subSubcategories || [];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      parseCSVForPreview(text);
      event.target.value = '';
    };
    reader.onerror = () => {
      toast.error('Ошибка чтения файла');
      event.target.value = '';
    };
    reader.readAsText(file, 'UTF-8');
  };

  const parseCSVForPreview = (csvText: string) => {
    if (!categoryId || !subcategoryId) {
      toast.error('Выберите категорию и подкатегорию перед загрузкой CSV');
      return;
    }

    try {
      // Парсим CSV с учётом кавычек и переносов строк
      const rows: string[][] = [];
      let currentRow: string[] = [];
      let currentCell = '';
      let inQuotes = false;
      
      for (let i = 0; i < csvText.length; i++) {
        const char = csvText[i];
        const nextChar = csvText[i + 1];
        
        if (char === '"' && nextChar === '"' && inQuotes) {
          currentCell += '"';
          i++;
        } else if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ';' && !inQuotes) {
          currentRow.push(currentCell.trim());
          currentCell = '';
        } else if (char === '\n' && !inQuotes) {
          currentRow.push(currentCell.trim());
          if (currentRow.some(c => c.length > 0)) {
            rows.push(currentRow);
          }
          currentRow = [];
          currentCell = '';
        } else if (char === '\r') {
          // Пропускаем \r
          continue;
        } else {
          currentCell += char;
        }
      }
      
      // Добавляем последнюю ячейку и строку
      if (currentCell || currentRow.length > 0) {
        currentRow.push(currentCell.trim());
        if (currentRow.some(c => c.length > 0)) {
          rows.push(currentRow);
        }
      }
      
      console.log('Parsed rows:', rows.length);
      
      if (rows.length < 2) {
        toast.error('CSV файл пустой или неверный формат');
        return;
      }

      const productsToAdd: PreviewProduct[] = [];
      
      for (let i = 1; i < rows.length; i++) {
        const parts = rows[i];
        
        console.log(`Row ${i} parts:`, parts);

        if (parts.length < 5) {
          console.log(`Skipping row ${i}: not enough parts (${parts.length})`);
          continue;
        }

        const [model, sku, specs, manufacturer, priceStr] = parts;
        
        if (!sku || !model || !priceStr) {
          console.log(`Skipping row ${i}: missing required fields`, {model, sku, priceStr});
          continue;
        }
        
        // Убираем всё после запятой (дробную часть) и парсим только целую часть
        const priceClean = priceStr.split(',')[0].replace(/[^\d]/g, '');
        const price = parseInt(priceClean);
        if (!price || price <= 0) {
          console.log(`Skipping row ${i}: invalid price`, priceStr);
          continue;
        }

        productsToAdd.push({
          sku: sku.trim(),
          name: model.trim(),
          description: model.trim(),
          price,
          categoryId,
          subcategoryId,
          subSubcategoryId: subSubcategoryId || undefined,
          manufacturer: manufacturer?.trim() || undefined,
          specifications: specs?.trim() || undefined,
          inStock: true
        });
      }
      
      console.log('Products to add:', productsToAdd.length);

      if (productsToAdd.length === 0) {
        toast.error('Не найдено товаров для импорта. Проверьте заполнение столбцов: Модель, Артикул, Цена');
        return;
      }

      const productsWithDuplicates = checkDuplicates(productsToAdd);
      const duplicateCount = productsWithDuplicates.filter(p => p.isDuplicate).length;
      
      setPreviewProducts(productsWithDuplicates);
      setShowPreview(true);
      
      if (duplicateCount > 0) {
        toast.warning(`Загружено ${productsToAdd.length} товаров. Найдено дубликатов: ${duplicateCount}`, { duration: 5000 });
      } else {
        toast.success(`Загружено ${productsToAdd.length} товаров для предпросмотра`);
      }
      
      setTimeout(() => {
        document.getElementById('preview-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      
    } catch (error) {
      console.error('CSV Parse error:', error);
      toast.error('Ошибка при чтении CSV');
    }
  };

  const parseManualForPreview = () => {
    if (!categoryId || !subcategoryId) {
      toast.error('Выберите категорию и подкатегорию');
      return;
    }

    if (!importData.trim()) {
      toast.error('Вставьте данные товаров');
      return;
    }

    try {
      const lines = importData.trim().split('\n').filter(line => line.trim());
      const productsToAdd: PreviewProduct[] = [];

      for (const line of lines) {
        const parts = line.split('\t').map(p => p.trim());
        
        if (parts.length >= 4) {
          const [description, sku, specs, manufacturer, priceStr] = parts;
          
          const priceMatch = priceStr.match(/[\d\s]+/);
          const price = priceMatch ? parseInt(priceMatch[0].replace(/\s/g, '')) : 0;

          if (sku && description && price > 0) {
            productsToAdd.push({
              sku,
              name: sku,
              description: description.replace(/"/g, ''),
              price,
              categoryId,
              subcategoryId,
              subSubcategoryId: subSubcategoryId || undefined,
              manufacturer: manufacturer || undefined,
              specifications: specs || undefined,
              inStock: true
            });
          }
        }
      }

      if (productsToAdd.length === 0) {
        toast.error('Не удалось распознать товары. Проверьте формат данных');
        return;
      }

      const productsWithDuplicates = checkDuplicates(productsToAdd);
      const duplicateCount = productsWithDuplicates.filter(p => p.isDuplicate).length;
      
      setPreviewProducts(productsWithDuplicates);
      setShowPreview(true);
      
      if (duplicateCount > 0) {
        toast.warning(`Загружено ${productsToAdd.length} товаров. Найдено дубликатов: ${duplicateCount}`, { duration: 5000 });
      }
      
    } catch (error) {
      console.error('Parse error:', error);
      toast.error('Ошибка при обработке данных');
    }
  };

  const confirmImport = () => {
    setImporting(true);
    try {
      const result = addProducts(previewProducts);
      
      if (result.duplicates.length > 0) {
        toast.warning(
          `Импортировано: ${result.added.length}, пропущено дубликатов: ${result.duplicates.length}`,
          { duration: 5000 }
        );
      } else {
        toast.success(`Импортировано товаров: ${result.added.length}`);
      }
      
      setPreviewProducts([]);
      setShowPreview(false);
      setImportData('');
      sessionStorage.removeItem(PREVIEW_STORAGE_KEY);
    } catch (error) {
      console.error('Import error:', error);
      toast.error('Ошибка при импорте товаров');
    } finally {
      setImporting(false);
    }
  };

  const cancelPreview = () => {
    setPreviewProducts([]);
    setShowPreview(false);
    sessionStorage.removeItem(PREVIEW_STORAGE_KEY);
  };

  const handleClearCatalog = () => {
    if (window.confirm(`Удалить все товары из каталога (${products.length} шт.)? Это действие нельзя отменить.`)) {
      clearAllProducts();
      toast.success('Каталог очищен');
      window.location.reload();
    }
  };

  const getCategoryName = (catId: string) => {
    return categories.find(c => c.id === catId)?.name || catId;
  };

  const getSubcategoryName = (catId: string, subCatId: string) => {
    const cat = categories.find(c => c.id === catId);
    return cat?.subcategories.find(s => s.id === subCatId)?.name || subCatId;
  };

  const getSubSubcategoryName = (catId: string, subCatId: string, subSubCatId?: string) => {
    if (!subSubCatId) return '';
    const cat = categories.find(c => c.id === catId);
    const subCat = cat?.subcategories.find(s => s.id === subCatId);
    return subCat?.subSubcategories?.find(s => s.id === subSubCatId)?.name || subSubCatId;
  };

  const updatePreviewProduct = (index: number, field: keyof PreviewProduct, value: any) => {
    setPreviewProducts(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const removePreviewProduct = (index: number) => {
    setPreviewProducts(prev => prev.filter((_, i) => i !== index));
  };

  const downloadCSVTemplate = () => {
    fetch('/catalog-template.csv')
      .then(res => res.text())
      .then(csvText => {
        const BOM = '\uFEFF';
        const blob = new Blob([BOM + csvText], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'SecurePro-шаблон-каталога.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      });
  };

  const filteredProducts = previewProducts.filter(product => {
    if (!showDuplicates && product.isDuplicate) return false;
    if (filterCategory && filterCategory !== 'all' && product.categoryId !== filterCategory) return false;
    if (filterManufacturer !== 'all' && product.manufacturer !== filterManufacturer) return false;
    if (filterSearch) {
      const search = filterSearch.toLowerCase();
      return (
        product.sku.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.specifications?.toLowerCase().includes(search)
      );
    }
    return true;
  });
  
  const duplicateCount = previewProducts.filter(p => p.isDuplicate).length;

  const uniqueManufacturers = Array.from(
    new Set(
      previewProducts
        .map(p => p.manufacturer)
        .filter(m => m && m.trim().length > 0)
    )
  ).filter(m => m !== undefined && m !== '') as string[];
  const uniqueCategories = Array.from(new Set(previewProducts.map(p => p.categoryId).filter(c => c && c.trim().length > 0)));

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader productsCount={products.length} onClearCatalog={handleClearCatalog} />

      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Icon name="Upload" size={28} />
            Импорт товаров
          </h1>

          <ImportForm
            categories={categories}
            categoryId={categoryId}
            setCategoryId={setCategoryId}
            subcategoryId={subcategoryId}
            setSubcategoryId={setSubcategoryId}
            subSubcategoryId={subSubcategoryId}
            setSubSubcategoryId={setSubSubcategoryId}
            subcategories={subcategories}
            subSubcategories={subSubcategories}
            importMode={importMode}
            setImportMode={setImportMode}
            importData={importData}
            setImportData={setImportData}
            importing={importing}
            handleFileUpload={handleFileUpload}
            parseManualForPreview={parseManualForPreview}
            downloadCSVTemplate={downloadCSVTemplate}
          />

          {showPreview && previewProducts.length > 0 && (
            <ImportPreviewList
              previewProducts={previewProducts}
              filteredProducts={filteredProducts}
              duplicateCount={duplicateCount}
              importing={importing}
              confirmImport={confirmImport}
              cancelPreview={cancelPreview}
              filterSearch={filterSearch}
              setFilterSearch={setFilterSearch}
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory}
              filterManufacturer={filterManufacturer}
              setFilterManufacturer={setFilterManufacturer}
              showDuplicates={showDuplicates}
              setShowDuplicates={setShowDuplicates}
              uniqueCategories={uniqueCategories}
              uniqueManufacturers={uniqueManufacturers}
              getCategoryName={getCategoryName}
              getSubcategoryName={getSubcategoryName}
              getSubSubcategoryName={getSubSubcategoryName}
              updatePreviewProduct={updatePreviewProduct}
              removePreviewProduct={removePreviewProduct}
            />
          )}

          <ImportInstructions importMode={importMode} />
        </Card>
      </main>
    </div>
  );
}
