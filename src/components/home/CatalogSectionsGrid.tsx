import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { categories } from '@/data/categories';
import { products, getProductCountByCategory } from '@/data/products';

const FEATURED_IDS = ['ipc2', 'hdcvi', 'ptz', 'nvr124', 'xvr', 'ip-intercom', 'skud', 'network'];

const COVER_OVERRIDES: Record<string, string> = {
  skud: '/catalog/skud.jpg',
};

export default function CatalogSectionsGrid() {
  const featured = FEATURED_IDS
    .map(id => categories.find(c => c.id === id))
    .filter((c): c is NonNullable<typeof c> => !!c);

  return (
    <section id="catalog" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-2">Каталог оборудования</h2>
            <p className="text-muted-foreground">
              Широкий ассортимент профессионального оборудования от ведущих производителей
            </p>
          </div>
          <Link to="/catalog">
            <Button variant="outline" className="px-6">
              Весь каталог
              <Icon name="ArrowRight" className="ml-2" size={18} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((category, index) => {
            const cover = COVER_OVERRIDES[category.id] ?? products.find(p => p.categoryId === category.id && p.image)?.image;
            return (
              <Link
                key={category.id}
                to={`/catalog/${category.slug}`}
                className="group rounded-lg border bg-white overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-[hsl(var(--secondary))] flex items-center justify-center overflow-hidden">
                  <span className="absolute top-3 left-3 text-sm font-bold text-primary">
                    /{String(index + 1).padStart(2, '0')}
                  </span>
                  {cover ? (
                    <img
                      src={cover}
                      alt={category.name}
                      className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <Icon name="Package" size={64} className="text-muted-foreground/30" />
                  )}
                </div>
                <div className="p-5 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-heading font-bold leading-tight group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {getProductCountByCategory(category.id)} товаров
                    </p>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-primary shrink-0" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}