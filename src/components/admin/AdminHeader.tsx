import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface AdminHeaderProps {
  productsCount: number;
  onClearCatalog: () => void;
}

export default function AdminHeader({ productsCount, onClearCatalog }: AdminHeaderProps) {
  return (
    <header className="border-b bg-card/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Shield" className="text-primary" size={36} />
            <div>
              <div className="text-2xl font-bold">SecurePro</div>
              <div className="text-xs text-muted-foreground">Панель управления</div>
            </div>
          </div>

          <div className="flex gap-2">
            {productsCount > 0 && (
              <Button 
                variant="destructive" 
                size="sm"
                onClick={onClearCatalog}
              >
                <Icon name="Trash2" size={18} className="mr-2" />
                Очистить каталог ({productsCount})
              </Button>
            )}
            <Link to="/catalog">
              <Button variant="outline">
                <Icon name="LayoutGrid" size={20} className="mr-2" />
                Каталог
              </Button>
            </Link>
            <Link to="/">
              <Button variant="ghost">
                <Icon name="Home" size={20} className="mr-2" />
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
