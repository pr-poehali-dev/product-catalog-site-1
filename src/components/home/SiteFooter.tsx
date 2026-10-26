import Icon from '@/components/ui/icon';

interface SiteFooterProps {
  scrollToSection: (sectionId: string) => void;
}

export default function SiteFooter({ scrollToSection }: SiteFooterProps) {
  return (
    <footer className="bg-[hsl(var(--dark))] text-white border-t border-white/10 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <div className="flex items-center gap-2 text-white">
          <Icon name="Shield" className="text-primary" size={24} />
          <span className="font-heading font-bold">SecurePro</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          <button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">Разделы</button>
          <button onClick={() => scrollToSection('steps')} className="hover:text-primary transition-colors">Этапы работы</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button>
          <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
        </nav>
        <p>© 2024 SecurePro. Все права защищены.</p>
      </div>
    </footer>
  );
}
