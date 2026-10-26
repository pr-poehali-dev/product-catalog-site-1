import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import LeadForm from './LeadForm';

interface HeroCatalogSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroCatalogSection({ scrollToSection }: HeroCatalogSectionProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[hsl(var(--dark))] text-white"
    >
      <img
        src="/hero.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--dark))] via-[hsl(var(--dark))]/80 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div>
          <p className="text-primary uppercase tracking-widest text-sm font-medium mb-4">
            Системы безопасности
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
            Контроль на любом расстоянии
          </h1>
          <p className="text-lg text-white/75 mb-8 max-w-xl">
            Видеонаблюдение, контроль доступа, домофония и сетевое оборудование.
            Подбор, поставка и монтаж под ключ.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="px-8" onClick={() => scrollToSection('catalog')}>
              Смотреть разделы
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Link to="/catalog">
              <Button
                size="lg"
                variant="outline"
                className="px-8 bg-transparent text-white border-white/40 hover:bg-white/10 hover:text-white"
              >
                Каталог товаров
              </Button>
            </Link>
          </div>
        </div>

        <LeadForm idPrefix="hero" />
      </div>
    </section>
  );
}
