import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { categories } from '@/data/categories';
import { addProducts } from '@/data/products';
import { toast } from 'sonner';

export default function Admin() {
  const [categoryId, setCategoryId] = useState('');
  const [subcategoryId, setSubcategoryId] = useState('');
  const [subSubcategoryId, setSubSubcategoryId] = useState('');
  const [importData, setImportData] = useState('');
  const [importing, setImporting] = useState(false);

  const selectedCategory = categories.find(c => c.id === categoryId);
  const subcategories = selectedCategory?.subcategories || [];
  const selectedSubcategory = subcategories.find(s => s.id === subcategoryId);
  const subSubcategories = selectedSubcategory?.subSubcategories || [];

  const handleImport = () => {
    if (!categoryId || !subcategoryId) {
      toast.error('Выберите категорию и подкатегорию');
      return;
    }

    if (!importData.trim()) {
      toast.error('Вставьте данные товаров');
      return;
    }

    setImporting(true);

    try {
      const lines = importData.trim().split('\n').filter(line => line.trim());
      const productsToAdd = [];

      for (const line of lines) {
        const parts = line.split('\t').map(p => p.trim());
        
        if (parts.length >= 4) {
          const [sku, internalCode, description, priceStr] = parts;
          
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
              inStock: true
            });
          }
        }
      }

      if (productsToAdd.length === 0) {
        toast.error('Не удалось распознать товары. Проверьте формат данных');
        setImporting(false);
        return;
      }

      addProducts(productsToAdd);
      
      toast.success(`Импортировано товаров: ${productsToAdd.length}`);
      setImportData('');
      
    } catch (error) {
      console.error('Import error:', error);
      toast.error('Ошибка при импорте товаров');
    } finally {
      setImporting(false);
    }
  };

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
                <code className="bg-muted px-1 py-0.5 rounded">Артикул [TAB] Код [TAB] Описание [TAB] Цена</code>
              </div>
              <Textarea
                id="data"
                value={importData}
                onChange={(e) => setImportData(e.target.value)}
                placeholder="F-IC-2122C2M(2.8mm)	311329188	2Мп уличная цилиндрическая IP-камера...	12 790 ₽"
                className="font-mono text-sm min-h-[300px]"
              />
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={handleImport} 
                disabled={importing || !categoryId || !subcategoryId || !importData.trim()}
                className="flex-1"
              >
                {importing ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Импортируем...
                  </>
                ) : (
                  <>
                    <Icon name="Upload" size={20} className="mr-2" />
                    Импортировать товары
                  </>
                )}
              </Button>
              <Button variant="outline" onClick={() => setImportData('')}>
                Очистить
              </Button>
            </div>
          </div>

          <div className="mt-8 p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="Info" size={18} />
              Инструкция по импорту
            </h3>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
              <li>Выберите категорию и подкатегорию для товаров</li>
              <li>Скопируйте строки из Excel (с колонками: Артикул, Код, Описание, Цена)</li>
              <li>Вставьте данные в текстовое поле</li>
              <li>Нажмите "Импортировать товары"</li>
            </ol>
          </div>
        </Card>
      </main>
    </div>
  );
}