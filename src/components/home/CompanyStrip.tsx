import Icon from '@/components/ui/icon';
import { products } from '@/data/products';

const stats = [
  { value: '14+', label: 'лет на рынке' },
  { value: '1500+', label: 'реализованных проектов' },
  { value: String(products.length), label: 'наименований товаров' },
  { value: '24/7', label: 'техническая поддержка' },
];

const values = [
  {
    icon: 'ShieldCheck',
    title: 'Гарантия качества',
    text: 'Работаем только с сертифицированным оборудованием. Официальная гарантия от производителей.',
  },
  {
    icon: 'TrendingDown',
    title: 'Лучшие цены',
    text: 'Прямые поставки от производителей. Гибкая система скидок для оптовых покупателей.',
  },
  {
    icon: 'Briefcase',
    title: 'Комплексные решения',
    text: 'Проектирование, поставка, монтаж и сервисное обслуживание под ключ.',
  },
];

export default function CompanyStrip() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">О компании</h2>
        <p className="text-muted-foreground max-w-3xl mb-10">
          SecurePro — профессиональный поставщик оборудования для систем безопасности с 2010 года.
          Мы работаем с объектами любой сложности: от частных домов до крупных промышленных комплексов.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 py-8 border-y border-border">
          {stats.map(item => (
            <div key={item.label}>
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary">{item.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {values.map(item => (
            <div key={item.title} className="bg-white rounded-lg border p-6">
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
