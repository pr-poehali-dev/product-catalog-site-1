import Icon from '@/components/ui/icon';

interface SiteFooterProps {
  scrollToSection: (sectionId: string) => void;
}

const linkClass = 'hover:text-primary transition-colors';

export default function SiteFooter({ scrollToSection }: SiteFooterProps) {
  return (
    <footer className="bg-[hsl(var(--dark))] text-white border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Shield" className="text-primary" size={32} />
              <span className="text-xl font-heading font-bold">SecurePro</span>
            </div>
            <p className="text-sm text-white/60">
              Профессиональное оборудование для систем безопасности с 2010 года
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><button onClick={() => scrollToSection('catalog')} className={linkClass}>Видеонаблюдение</button></li>
              <li><button onClick={() => scrollToSection('catalog')} className={linkClass}>Контроль доступа</button></li>
              <li><button onClick={() => scrollToSection('catalog')} className={linkClass}>Автоматика ворот</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><button onClick={() => scrollToSection('about')} className={linkClass}>О компании</button></li>
              <li><button onClick={() => scrollToSection('delivery')} className={linkClass}>Доставка</button></li>
              <li><button onClick={() => scrollToSection('faq')} className={linkClass}>FAQ</button></li>
              <li><button onClick={() => scrollToSection('contacts')} className={linkClass}>Контакты</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-primary" />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-primary" />
                info@securepro.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-primary" />
                Пн-Пт: 9:00 — 18:00
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© 2024 SecurePro. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className={linkClass}>Политика конфиденциальности</a>
            <a href="#" className={linkClass}>Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
