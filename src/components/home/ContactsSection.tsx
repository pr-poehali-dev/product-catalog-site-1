import Icon from '@/components/ui/icon';
import LeadForm from './LeadForm';

const contacts = [
  { icon: 'Phone', label: 'Телефон', value: '+7 (812) 770-06-70', href: 'tel:+78127700670' },
  { icon: 'Mail', label: 'Email', value: 'info@ssb.spb.ru', href: 'mailto:info@ssb.spb.ru' },
  { icon: 'MapPin', label: 'Адрес', value: 'Санкт-Петербург, ул. Седова, д. 11, БЦ «Эврика»' },
  { icon: 'Clock', label: 'Режим работы', value: 'пн-пт, 10:00-18:00' },
];

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-16 md:py-24 bg-[hsl(var(--dark))] text-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Контакты</h2>
          <p className="text-white/70 mb-8 max-w-md">
            Расскажите о задаче, и мы подготовим индивидуальное предложение
          </p>
          <ul className="space-y-5">
            {contacts.map(item => (
              <li key={item.label} className="flex gap-4">
                <Icon name={item.icon as any} className="text-primary shrink-0 mt-0.5" size={24} />
                <div>
                  <div className="text-sm text-white/50">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-lg hover:text-primary transition-colors">{item.value}</a>
                  ) : (
                    <div className="text-lg">{item.value}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <LeadForm idPrefix="contacts" title="Заявка на консультацию" />
      </div>
    </section>
  );
}
