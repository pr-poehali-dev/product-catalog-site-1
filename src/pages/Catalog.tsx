import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import CatalogNav from '@/components/catalog/CatalogNav';
import ProductCard from '@/components/catalog/ProductCard';
import { Product, CartItem } from '@/types/catalog';
import { getCategoryBySlug, getSubcategoryById, categories } from '@/data/categories';
import { products, searchProducts } from '@/data/products';
import { toast } from 'sonner';

export default function Catalog() {
  const { categorySlug, subcategorySlug } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const currentCategory = categorySlug ? getCategoryBySlug(categorySlug) : null;
  const currentSubcategory = currentCategory?.subcategories.find(sub => sub.slug === subcategorySlug);

  const displayedProducts = useMemo(() => {
    if (searchQuery.trim()) {
      return searchProducts(searchQuery);
    }

    if (currentSubcategory) {
      return products.filter(p => p.subcategoryId === currentSubcategory.id);
    }

    if (currentCategory) {
      return products.filter(p => p.categoryId === currentCategory.id);
    }

    return products;
  }, [searchQuery, currentCategory, currentSubcategory]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success('Добавлено в заявку');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/95 border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3">
              <Icon name="Shield" className="text-primary" size={36} />
              <div>
                <div className="text-2xl font-bold">SecurePro</div>
                <div className="text-xs text-muted-foreground">Системы безопасности</div>
              </div>
            </Link>

            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск товаров по названию или артикулу..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Link to="/">
              <Button variant="ghost">
                <Icon name="Home" size={20} className="mr-2" />
                На главную
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <div className="flex">
        <CatalogNav />

        <main className="flex-1 p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/catalog" className="hover:text-foreground">Каталог</Link>
              {currentCategory && (
                <>
                  <Icon name="ChevronRight" size={16} />
                  <Link to={`/catalog/${currentCategory.slug}`} className="hover:text-foreground">
                    {currentCategory.name}
                  </Link>
                </>
              )}
              {currentSubcategory && (
                <>
                  <Icon name="ChevronRight" size={16} />
                  <span className="text-foreground font-medium">{currentSubcategory.name}</span>
                </>
              )}
            </div>

            <h1 className="text-3xl font-bold mb-2">
              {currentSubcategory?.name || currentCategory?.name || 'Каталог товаров'}
            </h1>
            {(currentCategory || currentSubcategory) && (
              <p className="text-muted-foreground">
                {currentSubcategory?.description || currentCategory?.description}
              </p>
            )}
          </div>

          {displayedProducts.length === 0 ? (
            <div className="text-center py-16">
              <Icon name="Package" size={64} className="mx-auto text-muted-foreground/30 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
              <p className="text-muted-foreground mb-4">
                {searchQuery 
                  ? 'Попробуйте изменить параметры поиска'
                  : 'В этой категории пока нет товаров'}
              </p>
              {searchQuery && (
                <Button onClick={() => setSearchQuery('')} variant="outline">
                  Сбросить поиск
                </Button>
              )}
            </div>
          ) : (
            <>
              <div className="mb-4 text-sm text-muted-foreground">
                Найдено товаров: {displayedProducts.length}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                    onViewDetails={setSelectedProduct}
                  />
                ))}
              </div>
            </>
          )}
        </main>
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProduct.name}</DialogTitle>
                <div className="text-sm text-muted-foreground">Артикул: {selectedProduct.sku}</div>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  {selectedProduct.image ? (
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Icon name="Package" size={96} className="text-muted-foreground/30" />
                    </div>
                  )}
                </div>

                <div>
                  <div className="text-3xl font-bold text-primary mb-4">
                    {selectedProduct.price.toLocaleString('ru-RU')} ₽
                  </div>

                  <p className="text-muted-foreground mb-6">{selectedProduct.description}</p>

                  {selectedProduct.specs && Object.keys(selectedProduct.specs).length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Характеристики:</h3>
                      <div className="space-y-2">
                        {Object.entries(selectedProduct.specs).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{key}:</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }} className="w-full" size="lg">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Добавить в заявку
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
