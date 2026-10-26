import Icon from '@/components/ui/icon';

const info = [
  {
    icon: 'Truck',
    title: 'Доставка по России',
    text: 'Отправка в день заказа при наличии товара на складе. Москва и МО — курьером 1-2 дня, от 500 ₽. Регионы — ТК на выбор, 3-7 дней. Бесплатная доставка по Москве от 100 000 ₽',
  },
  {
    icon: 'Store',
    title: 'Самовывоз со склада',
    text: 'Бесплатно со склада в Москве. Готовность заказа — от 2 часов. Работаем пн-пт 9:00-18:00. Москва, Варшавское шоссе, д. 132',
  },
  {
    icon: 'CreditCard',
    title: 'Способы оплаты',
    text: 'Безналичный расчет для юридических лиц (с НДС и без). Наличными или картой при получении. Рассрочка для постоянных клиентов',
  },
];

export default function DeliverySection() {
  return (
    <section id="delivery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-10">Доставка и оплата</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {info.map(item => (
            <div key={item.title} className="rounded-lg border p-6">
              <Icon name={item.icon as any} className="text-primary mb-4" size={32} />
              <h3 className="font-heading font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
