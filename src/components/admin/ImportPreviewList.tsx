import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { PreviewProduct } from './types';

interface ImportPreviewListProps {
  previewProducts: PreviewProduct[];
  filteredProducts: PreviewProduct[];
  duplicateCount: number;
  importing: boolean;
  confirmImport: () => void;
  cancelPreview: () => void;
  filterSearch: string;
  setFilterSearch: (value: string) => void;
  filterCategory: string;
  setFilterCategory: (value: string) => void;
  filterManufacturer: string;
  setFilterManufacturer: (value: string) => void;
  showDuplicates: boolean;
  setShowDuplicates: (value: boolean) => void;
  uniqueCategories: string[];
  uniqueManufacturers: string[];
  getCategoryName: (catId: string) => string;
  getSubcategoryName: (catId: string, subCatId: string) => string;
  getSubSubcategoryName: (catId: string, subCatId: string, subSubCatId?: string) => string;
  updatePreviewProduct: (index: number, field: keyof PreviewProduct, value: any) => void;
  removePreviewProduct: (index: number) => void;
}

export default function ImportPreviewList({
  previewProducts,
  filteredProducts,
  duplicateCount,
  importing,
  confirmImport,
  cancelPreview,
  filterSearch,
  setFilterSearch,
  filterCategory,
  setFilterCategory,
  filterManufacturer,
  setFilterManufacturer,
  showDuplicates,
  setShowDuplicates,
  uniqueCategories,
  uniqueManufacturers,
  getCategoryName,
  getSubcategoryName,
  getSubSubcategoryName,
  updatePreviewProduct,
  removePreviewProduct
}: ImportPreviewListProps) {
  return (
    <div id="preview-section" className="mt-6 border-t pt-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Icon name="Eye" size={24} />
            Предпросмотр импорта ({filteredProducts.length} из {previewProducts.length})
          </h2>
          {duplicateCount > 0 && (
            <p className="text-sm text-orange-600 dark:text-orange-400 mt-1 flex items-center gap-1">
              <Icon name="AlertTriangle" size={16} />
              Найдено дубликатов: {duplicateCount} (они будут пропущены при импорте)
            </p>
          )}
        </div>
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
        <div>
          <Label className="text-sm mb-2 block">Поиск</Label>
          <div className="relative">
            <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Артикул, описание..."
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

        <div>
          <Label className="text-sm mb-2 block">Дубликаты</Label>
          <Button
            variant={showDuplicates ? "outline" : "secondary"}
            className="w-full justify-start"
            onClick={() => setShowDuplicates(!showDuplicates)}
          >
            <Icon name={showDuplicates ? "Eye" : "EyeOff"} size={18} className="mr-2" />
            {showDuplicates ? "Показать" : "Скрыть"}
          </Button>
        </div>
      </div>

      <div className="max-h-[500px] overflow-y-auto space-y-3">
        {filteredProducts.map((product) => {
          const originalIndex = previewProducts.indexOf(product);
          return (
          <Card key={originalIndex} className={`p-4 relative ${product.isDuplicate ? 'border-orange-500 bg-orange-50 dark:bg-orange-950/20' : ''}`}>
            {product.isDuplicate && (
              <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 bg-orange-500 text-white text-xs rounded-md">
                <Icon name="AlertTriangle" size={14} />
                Дубликат
              </div>
            )}
            <Button 
              variant="ghost" 
              size="sm"
              className="absolute top-2 right-2 h-8 w-8 p-0 text-destructive hover:text-destructive"
              onClick={() => removePreviewProduct(originalIndex)}
            >
              <Icon name="X" size={16} />
            </Button>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${product.isDuplicate ? 'pr-10 pl-24' : 'pr-10'}`}>
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
  );
}
