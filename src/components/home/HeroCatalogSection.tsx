import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';
import { Product } from './productsData';

interface HeroCatalogSectionProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filteredProducts: Product[];
  scrollToSection: (sectionId: string) => void;
  addToCart: (product: Product) => void;
}

export default function HeroCatalogSection({
  categories,
  selectedCategory,
  setSelectedCategory,
  filteredProducts,
  scrollToSection,
  addToCart
}: HeroCatalogSectionProps) {
  return (
    <>
      <section
        id="home"
        className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Профессиональные решения для безопасности
          </Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
            Оборудование для<br />систем безопасности
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Видеонаблюдение, контроль доступа, автоматика ворот. Проектирование, поставка, монтаж под ключ.
            Работаем с объектами любой сложности.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="text-base px-8" onClick={() => scrollToSection('catalog')}>
              Смотреть каталог
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="text-base px-8">
                  Получить консультацию
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-heading">Заказать консультацию</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="consult-name">Ваше имя *</Label>
                    <Input id="consult-name" placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="consult-phone">Телефон *</Label>
                    <Input id="consult-phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="consult-message">Вопрос</Label>
                    <Textarea
                      id="consult-message"
                      placeholder="Опишите задачу или задайте вопрос..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full" onClick={() => toast.success('Заявка отправлена!')}>
                    Отправить
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Каталог оборудования</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент профессионального оборудования от ведущих производителей
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="min-w-[140px]"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="aspect-square overflow-hidden bg-muted relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 right-3" variant="secondary">
                    {product.category}
                  </Badge>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-heading font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 flex-1">{product.description}</p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" className="px-0 mb-3 justify-start h-auto">
                        <Icon name="Info" size={16} className="mr-1" />
                        Характеристики
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="font-heading">{product.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <img src={product.image} alt={product.name} className="w-full rounded-lg" />
                        <p className="text-muted-foreground">{product.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-semibold">Технические характеристики:</h4>
                          <ul className="space-y-1">
                            {product.specs.map((spec, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <span className="text-2xl font-bold text-primary">
                            {product.price.toLocaleString()} ₽
                          </span>
                          <Button onClick={() => addToCart(product)}>
                            Добавить в заявку
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="text-xl font-bold text-primary">
                      {product.price.toLocaleString()} ₽
                    </span>
                    <Button size="sm" onClick={() => addToCart(product)}>
                      <Icon name="Plus" size={16} className="mr-1" />
                      В заявку
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
