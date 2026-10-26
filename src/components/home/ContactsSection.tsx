import Icon from '@/components/ui/icon';
import LeadForm from './LeadForm';

const contacts = [
  { icon: 'Phone', label: 'Телефон', value: '+7 (495) 123-45-67', note: 'Звонок бесплатный' },
  { icon: 'Mail', label: 'Email', value: 'info@securepro.ru', note: 'Ответим в течение часа' },
  { icon: 'Clock', label: 'Режим работы', value: 'Пн-Пт: 9:00 — 18:00', note: 'Сб-Вс: по договорённости' },
  { icon: 'MapPin', label: 'Адрес склада', value: 'Москва, Варшавское ш., 132', note: 'Самовывоз пн-пт 9:00-18:00' },
];

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-16 md:py-24 bg-[hsl(var(--dark))] text-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-10">Контакты</h2>
          <ul className="space-y-6">
            {contacts.map(item => (
              <li key={item.label} className="flex gap-4">
                <Icon name={item.icon as any} className="text-primary shrink-0 mt-0.5" size={24} />
                <div>
                  <div className="text-sm text-white/50">{item.label}</div>
                  <div className="text-lg">{item.value}</div>
                  <div className="text-sm text-white/50">{item.note}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <LeadForm
          title="Остались вопросы?"
          subtitle="Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут"
        />
      </div>
    </section>
  );
}
