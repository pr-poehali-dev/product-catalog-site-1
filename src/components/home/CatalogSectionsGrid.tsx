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
    <section id="catalog" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Каталог оборудования</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {products.length} товаров в {categories.length} разделах. Выберите направление
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(category => {
            const cover = COVER_OVERRIDES[category.id] ?? products.find(p => p.categoryId === category.id && p.image)?.image;
            return (
              <Link
                key={category.id}
                to={`/catalog/${category.slug}`}
                className="group rounded-xl border bg-card overflow-hidden hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="aspect-[4/3] bg-white flex items-center justify-center overflow-hidden">
                  {cover ? (
                    <img
                      src={cover}
                      alt={category.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <Icon name="Package" size={64} className="text-muted-foreground/30" />
                  )}
                </div>
                <div className="p-5 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-heading font-bold text-lg leading-tight group-hover:text-primary transition-colors">
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

        <div className="text-center mt-10">
          <Link to="/catalog">
            <Button size="lg" variant="outline" className="px-8">
              Весь каталог
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}