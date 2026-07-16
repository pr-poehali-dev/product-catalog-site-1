import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { CartItem } from './productsData';

interface HomeHeaderProps {
  cart: CartItem[];
  activeSection: string;
  formData: {
    name: string;
    phone: string;
    email: string;
    company: string;
    message: string;
  };
  setFormData: (data: { name: string; phone: string; email: string; company: string; message: string }) => void;
  totalPrice: number;
  scrollToSection: (sectionId: string) => void;
  updateQuantity: (id: number, delta: number) => void;
  removeFromCart: (id: number) => void;
  handleSubmitRequest: () => void;
}

export default function HomeHeader({
  cart,
  activeSection,
  formData,
  setFormData,
  totalPrice,
  scrollToSection,
  updateQuantity,
  removeFromCart,
  handleSubmitRequest
}: HomeHeaderProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/95 border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Shield" className="text-primary" size={36} />
            <div>
              <div className="text-2xl font-heading font-bold">SecurePro</div>
              <div className="text-xs text-muted-foreground">Системы безопасности</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/catalog">
              <Button variant="ghost">Каталог</Button>
            </Link>
            {[
              { id: 'home', label: 'Главная' },
              { id: 'about', label: 'О компании' },
              { id: 'delivery', label: 'Доставка' },
              { id: 'faq', label: 'FAQ' },
              { id: 'contacts', label: 'Контакты' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary font-medium' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Icon name="FileText" size={20} />
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
                    {cart.length}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="font-heading">Заявка на КП</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4">
                {cart.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">Список пуст</p>
                ) : (
                  <>
                    <div className="space-y-3 max-h-[40vh] overflow-y-auto">
                      {cart.map(item => (
                        <Card key={item.id} className="p-3">
                          <div className="flex gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-sm truncate">{item.name}</h3>
                              <p className="text-xs text-muted-foreground">{item.category}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <Button
                                  size="icon"
                                  variant="outline"
                                  className="h-7 w-7"
                                  onClick={() => updateQuantity(item.id, -1)}
                                >
                                  <Icon name="Minus" size={14} />
                                </Button>
                                <span className="w-6 text-center text-sm">{item.quantity}</span>
                                <Button
                                  size="icon"
                                  variant="outline"
                                  className="h-7 w-7"
                                  onClick={() => updateQuantity(item.id, 1)}
                                >
                                  <Icon name="Plus" size={14} />
                                </Button>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="h-7 w-7 ml-auto"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <Icon name="Trash2" size={14} />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Ориентировочная сумма:</span>
                        <span className="font-bold">{totalPrice.toLocaleString()} ₽</span>
                      </div>
                      
                      <div className="space-y-3 pt-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Ваше имя *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Иван Иванов"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон *</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+7 (999) 123-45-67"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            placeholder="example@company.ru"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Компания</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={e => setFormData({ ...formData, company: e.target.value })}
                            placeholder="ООО «Название»"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Комментарий</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Укажите детали проекта, адрес доставки..."
                            rows={3}
                          />
                        </div>
                      </div>

                      <Button className="w-full" size="lg" onClick={handleSubmitRequest}>
                        Отправить заявку на КП
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Мы свяжемся с вами в течение 1 часа
                      </p>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
