import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { categories } from '@/data/categories';
import { addProducts, clearAllProducts, products } from '@/data/products';
import { toast } from 'sonner';

interface PreviewProduct {
  sku: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  subcategoryId: string;
  subSubcategoryId?: string;
  inStock: boolean;
  manufacturer?: string;
  specifications?: string;
}

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

  const parseCSVLine = (line: string): string[] => {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    const delimiter = ';';
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const nextChar = line[i + 1];
      
      if (char === '"' && nextChar === '"') {
        // Двойные кавычки - это экранированная кавычка
        current += '"';
        i++; // Пропускаем следующую кавычку
      } else if (char === '"') {
        // Переключаем режим кавычек
        inQuotes = !inQuotes;
      } else if (char === delimiter && !inQuotes) {
        // Разделитель вне кавычек
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result;
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

      setPreviewProducts(productsToAdd);
      setShowPreview(true);
      toast.success(`Загружено ${productsToAdd.length} товаров для предпросмотра`);
      
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

      setPreviewProducts(productsToAdd);
      setShowPreview(true);
      
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
      <header className="border-b bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Shield" className="text-primary" size={36} />
              <div>
                <div className="text-2xl font-bold">SecurePro</div>
                <div className="text-xs text-muted-foreground">Панель управления</div>
              </div>
            </div>

            <div className="flex gap-2">
              {products.length > 0 && (
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={handleClearCatalog}
                >
                  <Icon name="Trash2" size={18} className="mr-2" />
                  Очистить каталог ({products.length})
                </Button>
              )}
              <Link to="/catalog">
                <Button variant="outline">
                  <Icon name="LayoutGrid" size={20} className="mr-2" />
                  Каталог
                </Button>
              </Link>
              <Link to="/">
                <Button variant="ghost">
                  <Icon name="Home" size={20} className="mr-2" />
                  На главную
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Icon name="Upload" size={28} />
            Импорт товаров
          </h1>

          <div className="mb-6 p-4 bg-accent rounded-lg border">
            <div className="flex items-start gap-3">
              <Icon name="FileSpreadsheet" size={20} className="text-primary mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Шаблон для заполнения</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Скачайте готовый шаблон со всеми категориями и ID. Заполните столбцы с товарами и импортируйте обратно.
                </p>
                <Button variant="outline" size="sm" onClick={downloadCSVTemplate}>
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать шаблон CSV
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-6 flex gap-2 p-1 bg-muted rounded-lg">
            <Button
              variant={importMode === 'csv' ? 'default' : 'ghost'}
              onClick={() => setImportMode('csv')}
              className="flex-1"
            >
              <Icon name="FileUp" size={18} className="mr-2" />
              Загрузить CSV
            </Button>
            <Button
              variant={importMode === 'manual' ? 'default' : 'ghost'}
              onClick={() => setImportMode('manual')}
              className="flex-1"
            >
              <Icon name="ClipboardPaste" size={18} className="mr-2" />
              Вставить из таблицы
            </Button>
          </div>

          {importMode === 'csv' ? (
            <div className="space-y-6">
              <div>
                <Label htmlFor="category">Категория *</Label>
                <Select value={categoryId} onValueChange={(value) => {
                  setCategoryId(value);
                  setSubcategoryId('');
                }}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Выберите категорию" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="subcategory">Подкатегория *</Label>
                <Select value={subcategoryId} onValueChange={(value) => {
                  setSubcategoryId(value);
                  setSubSubcategoryId('');
                }} disabled={!categoryId}>
                  <SelectTrigger id="subcategory">
                    <SelectValue placeholder="Выберите подкатегорию" />
                  </SelectTrigger>
                  <SelectContent>
                    {subcategories.map((sub) => (
                      <SelectItem key={sub.id} value={sub.id}>
                        {sub.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {subSubcategories.length > 0 && (
                <div>
                  <Label htmlFor="subsubcategory">Разрешение (опционально)</Label>
                  <Select value={subSubcategoryId || ''} onValueChange={setSubSubcategoryId} disabled={!subcategoryId}>
                    <SelectTrigger id="subsubcategory">
                      <SelectValue placeholder="Выберите разрешение" />
                    </SelectTrigger>
                    <SelectContent>
                      {subSubcategories.map((subsub) => (
                        <SelectItem key={subsub.id} value={subsub.id}>
                          {subsub.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div>
                <Label htmlFor="csvFile">Файл CSV с товарами</Label>
                <div className="mt-2">
                  <Input
                    id="csvFile"
                    type="file"
                    accept=".csv"
                    onChange={handleFileUpload}
                    disabled={importing || !categoryId || !subcategoryId}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Загрузите заполненный шаблон CSV для предпросмотра товаров перед импортом.
                </p>
              </div>
            </div>
          ) : (
          <div className="space-y-6">
            <div>
              <Label htmlFor="category">Категория *</Label>
              <Select value={categoryId} onValueChange={(value) => {
                setCategoryId(value);
                setSubcategoryId('');
              }}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="subcategory">Подкатегория *</Label>
              <Select value={subcategoryId} onValueChange={(value) => {
                setSubcategoryId(value);
                setSubSubcategoryId('');
              }} disabled={!categoryId}>
                <SelectTrigger id="subcategory">
                  <SelectValue placeholder="Выберите подкатегорию" />
                </SelectTrigger>
                <SelectContent>
                  {subcategories.map((sub) => (
                    <SelectItem key={sub.id} value={sub.id}>
                      {sub.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {subSubcategories.length > 0 && (
              <div>
                <Label htmlFor="subsubcategory">Разрешение (опционально)</Label>
                <Select value={subSubcategoryId} onValueChange={setSubSubcategoryId} disabled={!subcategoryId}>
                  <SelectTrigger id="subsubcategory">
                    <SelectValue placeholder="Выберите разрешение" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Не выбрано</SelectItem>
                    {subSubcategories.map((subSub) => (
                      <SelectItem key={subSub.id} value={subSub.id}>
                        {subSub.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div>
              <Label htmlFor="data">Данные товаров *</Label>
              <div className="text-sm text-muted-foreground mb-2">
                Вставьте строки из таблицы в формате: <br />
                <code className="bg-muted px-1 py-0.5 rounded">Модель [TAB] Артикул [TAB] Характеристики [TAB] Производитель [TAB] Цена</code>
              </div>
              <Textarea
                id="data"
                value={importData}
                onChange={(e) => setImportData(e.target.value)}
                placeholder="DS-2CD2123G0-I	311329188	ИК подсветка 30м, WDR 120дБ	Hikvision	12 790 ₽"
                className="font-mono text-sm min-h-[300px]"
              />
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={parseManualForPreview} 
                disabled={importing || !categoryId || !subcategoryId || !importData.trim()}
                className="flex-1"
              >
                <Icon name="Eye" size={20} className="mr-2" />
                Предпросмотр
              </Button>
              <Button variant="outline" onClick={() => setImportData('')}>
                Очистить
              </Button>
            </div>
          </div>
          )}

          {showPreview && previewProducts.length > 0 && (
            <div id="preview-section" className="mt-6 border-t pt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Icon name="Eye" size={24} />
                  Предпросмотр импорта ({filteredProducts.length} из {previewProducts.length})
                </h2>
                <div className="flex gap-2">
                  <Button onClick={confirmImport} disabled={importing}>
                    {importing ? (
                      <>
                        <Icon name="Loader2" size={18} className="mr-2 animate-spin" />
                        Импортируем...
                      </>
                    ) : (
                      <>
                        <Icon name="Check" size={18} className="mr-2" />
                        Подтвердить импорт
                      </>
                    )}
                  </Button>
                  <Button variant="outline" onClick={cancelPreview}>
                    Отмена
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                <div>
                  <Label className="text-sm mb-2 block">Поиск</Label>
                  <div className="relative">
                    <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Артикул, описание, характеристики..."
                      value={filterSearch}
                      onChange={(e) => setFilterSearch(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-sm mb-2 block">Категория</Label>
                  <Select value={filterCategory} onValueChange={setFilterCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Все категории" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все категории</SelectItem>
                      {uniqueCategories.map(catId => (
                        <SelectItem key={catId} value={catId}>
                          {getCategoryName(catId)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm mb-2 block">Производитель</Label>
                  <Select value={filterManufacturer} onValueChange={setFilterManufacturer}>
                    <SelectTrigger>
                      <SelectValue placeholder="Все производители" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все производители</SelectItem>
                      {uniqueManufacturers.map(mfr => (
                        <SelectItem key={mfr} value={mfr}>
                          {mfr}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="max-h-[500px] overflow-y-auto space-y-3">
                {filteredProducts.map((product) => {
                  const originalIndex = previewProducts.indexOf(product);
                  return (
                  <Card key={originalIndex} className="p-4 relative">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="absolute top-2 right-2 h-8 w-8 p-0 text-destructive hover:text-destructive"
                      onClick={() => removePreviewProduct(originalIndex)}
                    >
                      <Icon name="X" size={16} />
                    </Button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-10">
                      <div className="space-y-3">
                        <div>
                          <Label className="text-xs text-muted-foreground">Артикул</Label>
                          <Input 
                            value={product.sku}
                            onChange={(e) => updatePreviewProduct(originalIndex, 'sku', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Производитель</Label>
                          <Input 
                            value={product.manufacturer || ''}
                            onChange={(e) => updatePreviewProduct(originalIndex, 'manufacturer', e.target.value)}
                            className="mt-1"
                            placeholder="Не указан"
                          />
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Описание</Label>
                          <Textarea 
                            value={product.description}
                            onChange={(e) => updatePreviewProduct(originalIndex, 'description', e.target.value)}
                            className="mt-1 min-h-[60px]"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <Label className="text-xs text-muted-foreground">Цена (₽)</Label>
                          <Input 
                            type="number"
                            value={product.price}
                            onChange={(e) => updatePreviewProduct(originalIndex, 'price', parseInt(e.target.value) || 0)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Характеристики</Label>
                          <Textarea 
                            value={product.specifications || ''}
                            onChange={(e) => updatePreviewProduct(originalIndex, 'specifications', e.target.value)}
                            className="mt-1 min-h-[60px]"
                            placeholder="Не указаны"
                          />
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground mb-2 block">Категории</Label>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-md text-sm">
                              {getCategoryName(product.categoryId)}
                            </span>
                            <span className="px-3 py-1.5 bg-secondary rounded-md text-sm">
                              {getSubcategoryName(product.categoryId, product.subcategoryId)}
                            </span>
                            {product.subSubcategoryId && (
                              <span className="px-3 py-1.5 bg-accent rounded-md text-sm">
                                {getSubSubcategoryName(product.categoryId, product.subcategoryId, product.subSubcategoryId)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                  );
                })}
              </div>
            </div>
          )}

          <div className="mt-8 p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="Info" size={18} />
              Инструкция по импорту
            </h3>
            {importMode === 'csv' ? (
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Скачайте шаблон CSV выше (с правильной кодировкой UTF-8)</li>
                <li>Откройте в Excel или Google Sheets</li>
                <li>Заполните столбцы: Артикул, Код, Описание, Цена, Производитель, Характеристики</li>
                <li>Сохраните файл в формате CSV</li>
                <li>Загрузите файл для предпросмотра</li>
                <li>Используйте фильтры для проверки товаров по категориям и производителям</li>
                <li>Редактируйте нужные поля прямо в предпросмотре</li>
                <li>Подтвердите импорт</li>
              </ol>
            ) : (
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Выберите категорию и подкатегорию для товаров</li>
                <li>Скопируйте строки из Excel (колонки: Артикул, Код, Описание, Цена, Производитель, Характеристики)</li>
                <li>Вставьте данные в текстовое поле</li>
                <li>Нажмите "Предпросмотр" для проверки данных</li>
                <li>Используйте фильтры и редактируйте товары при необходимости</li>
                <li>Подтвердите импорт товаров</li>
              </ol>
            )}
          </div>
        </Card>
      </main>
    </div>
  );
}