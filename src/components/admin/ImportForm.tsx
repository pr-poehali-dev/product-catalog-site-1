import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Category, Subcategory, SubSubcategory } from '@/types/catalog';

interface ImportFormProps {
  categories: Category[];
  categoryId: string;
  setCategoryId: (value: string) => void;
  subcategoryId: string;
  setSubcategoryId: (value: string) => void;
  subSubcategoryId: string;
  setSubSubcategoryId: (value: string) => void;
  subcategories: Subcategory[];
  subSubcategories: SubSubcategory[];
  importMode: 'manual' | 'csv';
  setImportMode: (mode: 'manual' | 'csv') => void;
  importData: string;
  setImportData: (value: string) => void;
  importing: boolean;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  parseManualForPreview: () => void;
  downloadCSVTemplate: () => void;
}

export default function ImportForm({
  categories,
  categoryId,
  setCategoryId,
  subcategoryId,
  setSubcategoryId,
  subSubcategoryId,
  setSubSubcategoryId,
  subcategories,
  subSubcategories,
  importMode,
  setImportMode,
  importData,
  setImportData,
  importing,
  handleFileUpload,
  parseManualForPreview,
  downloadCSVTemplate
}: ImportFormProps) {
  return (
    <>
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
    </>
  );
}
