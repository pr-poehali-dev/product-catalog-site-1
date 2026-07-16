import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface SiteFooterProps {
  scrollToSection: (sectionId: string) => void;
}

export default function SiteFooter({ scrollToSection }: SiteFooterProps) {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Shield" className="text-primary" size={32} />
              <span className="text-xl font-heading font-bold">SecurePro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Профессиональное оборудование для систем безопасности с 2010 года
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">Видеонаблюдение</button></li>
              <li><button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">Контроль доступа</button></li>
              <li><button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">Автоматика ворот</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О компании</button></li>
              <li><button onClick={() => scrollToSection('delivery')} className="hover:text-primary transition-colors">Доставка</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors">FAQ</button></li>
              <li><button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
        <Separator className="mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 SecurePro. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
