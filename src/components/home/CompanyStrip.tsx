import Icon from '@/components/ui/icon';
import { products } from '@/data/products';

const stats = [
  { value: '14+', label: 'лет на рынке' },
  { value: '1500+', label: 'проектов' },
  { value: String(products.length), label: 'товаров в каталоге' },
  { value: '24/7', label: 'поддержка' },
];

const info = [
  {
    icon: 'Truck',
    title: 'Доставка',
    text: 'По Москве 1-2 дня, по России ТК 3-7 дней. Бесплатно по Москве от 100 000 ₽',
  },
  {
    icon: 'Store',
    title: 'Самовывоз',
    text: 'Москва, Варшавское шоссе, 132. Пн-Пт 9:00-18:00, готовность от 2 часов',
  },
  {
    icon: 'CreditCard',
    title: 'Оплата',
    text: 'Безналичный расчёт с НДС и без, наличные или карта, рассрочка постоянным клиентам',
  },
];

export default function CompanyStrip() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">SecurePro</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Поставщик оборудования для систем безопасности с 2010 года. Гарантия производителя, прямые поставки, проектирование и монтаж под ключ
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 py-6 border-y">
            {stats.map(item => (
              <div key={item.label} className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">{item.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          <div id="delivery" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {info.map(item => (
              <div key={item.title} className="flex gap-4">
                <Icon name={item.icon as any} className="text-primary shrink-0" size={32} />
                <div>
                  <h3 className="font-heading font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
