import { Product } from '@/types/catalog';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-muted">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Icon name="Package" size={64} className="text-muted-foreground/30" />
          </div>
        )}
        {product.inStock === false && (
          <Badge className="absolute top-2 right-2" variant="secondary">
            Под заказ
          </Badge>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="text-xs text-muted-foreground mb-1">Артикул: {product.sku}</div>
        <h3 className="font-semibold mb-2 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>

        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-2xl font-bold text-primary">
              {product.price.toLocaleString('ru-RU')} ₽
            </span>
          </div>

          <div className="flex gap-2">
            <Button 
              onClick={() => onAddToCart(product)} 
              className="flex-1"
              size="sm"
            >
              <Icon name="ShoppingCart" size={16} className="mr-1" />
              В заявку
            </Button>
            <Button 
              onClick={() => onViewDetails(product)}
              variant="outline"
              size="sm"
            >
              <Icon name="Info" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
