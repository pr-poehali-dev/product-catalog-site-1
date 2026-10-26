import Icon from '@/components/ui/icon';
import { products } from '@/data/products';

const stats = [
  { value: '14+', label: 'лет на рынке' },
  { value: '1500+', label: 'объектов обслужили' },
  { value: String(products.length), label: 'товаров в каталоге' },
  { value: '24/7', label: 'поддержка' },
];

const values = [
  { icon: 'ShieldCheck', title: 'Качество и сервис', text: 'Главная ценность для нас: качество работы и высокий уровень сервиса' },
  { icon: 'Lightbulb', title: 'Следим за новинками', text: 'Регулярно обновляем оборудование и предлагаем только проверенные современные решения' },
  { icon: 'Handshake', title: 'Результат надолго', text: 'Вы можете доверить нам технические вопросы: результат будет надёжным и долговечным' },
];

export default function CompanyStrip() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-10">О нас</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 py-8 border-y">
          {stats.map(item => (
            <div key={item.label}>
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary">{item.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map(item => (
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
    </section>
  );
}
