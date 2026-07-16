import Icon from '@/components/ui/icon';

interface ImportInstructionsProps {
  importMode: 'manual' | 'csv';
}

export default function ImportInstructions({ importMode }: ImportInstructionsProps) {
  return (
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
  );
}
