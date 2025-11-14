import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  specs: string[];
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'IP-камера 4MP Dome',
    price: 12500,
    category: 'Видеонаблюдение',
    image: 'https://cdn.poehali.dev/projects/f7b2f058-077e-4270-85d1-9ca1352529f7/files/3b6c5d39-2f0d-4892-99d4-8262ab8c2bd5.jpg',
    description: 'Купольная IP-камера с ИК-подсветкой до 30м',
    specs: ['Разрешение: 4MP (2560×1440)', 'ИК-подсветка: до 30м', 'Объектив: 2.8-12мм', 'Степень защиты: IP67']
  },
  {
    id: 2,
    name: 'NVR 16-канальный',
    price: 28900,
    category: 'Видеонаблюдение',
    image: 'https://cdn.poehali.dev/projects/f7b2f058-077e-4270-85d1-9ca1352529f7/files/3b6c5d39-2f0d-4892-99d4-8262ab8c2bd5.jpg',
    description: 'Сетевой видеорегистратор для IP-камер',
    specs: ['16 каналов', 'Запись до 8MP', 'HDD до 8ТБ', 'HDMI 4K выход']
  },
  {
    id: 3,
    name: 'Коммутатор PoE 8 портов',
    price: 8900,
    category: 'Видеонаблюдение',
    image: 'https://cdn.poehali.dev/projects/f7b2f058-077e-4270-85d1-9ca1352529f7/files/3b6c5d39-2f0d-4892-99d4-8262ab8c2bd5.jpg',
    description: 'Управляемый коммутатор с PoE',
    specs: ['8 портов PoE+', 'Мощность: 120Вт', 'Скорость: Gigabit', 'Бюджет PoE на порт: 30Вт']
  },
  {
    id: 4,
    name: 'Контроллер СКУД',
    price: 15400,
    category: 'Контроль доступа',
    image: 'https://cdn.poehali.dev/projects/f7b2f058-077e-4270-85d1-9ca1352529f7/files/95681527-9d6c-4555-a637-8134e0ad67af.jpg',
    description: 'Сетевой контроллер на 2 двери',
    specs: ['2 считывателя', 'До 50 000 карт', 'TCP/IP', 'Антипасбэк']
  },
  {
    id: 5,
    name: 'Считыватель EM-Marine',
    price: 2800,
    category: 'Контроль доступа',
    image: 'https://cdn.poehali.dev/projects/f7b2f058-077e-4270-85d1-9ca1352529f7/files/95681527-9d6c-4555-a637-8134e0ad67af.jpg',
    description: 'Бесконтактный считыватель 125кГц',
    specs: ['Частота: 125кГц', 'Дальность: до 10см', 'Wiegand 26/34', 'Защита: IP65']
  },
  {
    id: 6,
    name: 'Электромагнитный замок 300кг',
    price: 4200,
    category: 'Контроль доступа',
    image: 'https://cdn.poehali.dev/projects/f7b2f058-077e-4270-85d1-9ca1352529f7/files/95681527-9d6c-4555-a637-8134e0ad67af.jpg',
    description: 'Электромагнитный замок для металлической двери',
    specs: ['Удержание: 300кг', 'Напряжение: 12В', 'Ток: 500мА', 'LED индикация']
  },
  {
    id: 7,
    name: 'Привод откатных ворот',
    price: 35900,
    category: 'Автоматика ворот',
    image: 'https://cdn.poehali.dev/projects/f7b2f058-077e-4270-85d1-9ca1352529f7/files/8c4d87a1-ff85-4546-b48a-598d0f122267.jpg',
    description: 'Электропривод для откатных ворот до 800кг',
    specs: ['Вес ворот: до 800кг', 'Мощность: 550Вт', 'Скорость: 12м/мин', 'Встроенный контроллер']
  },
  {
    id: 8,
    name: 'Привод распашных ворот',
    price: 28500,
    category: 'Автоматика ворот',
    image: 'https://cdn.poehali.dev/projects/f7b2f058-077e-4270-85d1-9ca1352529f7/files/8c4d87a1-ff85-4546-b48a-598d0f122267.jpg',
    description: 'Комплект приводов для распашных ворот',
    specs: ['Створка: до 400кг', 'Длина створки: до 4м', 'Напряжение: 220В', 'Угол открытия: 110°']
  },
  {
    id: 9,
    name: 'Фотоэлементы безопасности',
    price: 3200,
    category: 'Автоматика ворот',
    image: 'https://cdn.poehali.dev/projects/f7b2f058-077e-4270-85d1-9ca1352529f7/files/8c4d87a1-ff85-4546-b48a-598d0f122267.jpg',
    description: 'Беспроводные фотоэлементы',
    specs: ['Дальность: до 20м', 'Частота: 433МГц', 'Защита: IP54', 'Питание: 12-24В']
  },
  {
    id: 10,
    name: 'PTZ-камера 2MP',
    price: 45900,
    category: 'Видеонаблюдение',
    image: 'https://cdn.poehali.dev/projects/f7b2f058-077e-4270-85d1-9ca1352529f7/files/3b6c5d39-2f0d-4892-99d4-8262ab8c2bd5.jpg',
    description: 'Поворотная IP-камера с 20х зумом',
    specs: ['Разрешение: 2MP', 'Оптический зум: 20x', 'ИК: до 150м', 'Поворот: 360° непрерывно']
  },
  {
    id: 11,
    name: 'Биометрический считыватель',
    price: 18900,
    category: 'Контроль доступа',
    image: 'https://cdn.poehali.dev/projects/f7b2f058-077e-4270-85d1-9ca1352529f7/files/95681527-9d6c-4555-a637-8134e0ad67af.jpg',
    description: 'Терминал с распознаванием отпечатка',
    specs: ['База: до 3000 отпечатков', 'Время идентификации: <1сек', 'Дисплей: 2.8" TFT', 'TCP/IP, USB']
  },
  {
    id: 12,
    name: 'Шлагбаум автоматический',
    price: 52000,
    category: 'Автоматика ворот',
    image: 'https://cdn.poehali.dev/projects/f7b2f058-077e-4270-85d1-9ca1352529f7/files/8c4d87a1-ff85-4546-b48a-598d0f122267.jpg',
    description: 'Шлагбаум для проезжей части до 6м',
    specs: ['Длина стрелы: до 6м', 'Интенсивность: 100%', 'Скорость: 3-6 сек', 'Подсветка стрелы']
  }
];

export default function Index() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });

  const categories = ['Все', 'Видеонаблюдение', 'Контроль доступа', 'Автоматика ворот'];

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

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const filteredProducts =
    selectedCategory === 'Все'
      ? products
      : products.filter(p => p.category === selectedCategory);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmitRequest = () => {
    if (!formData.name || !formData.phone) {
      toast.error('Заполните обязательные поля');
      return;
    }
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
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
              {[
                { id: 'home', label: 'Главная' },
                { id: 'catalog', label: 'Каталог' },
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

      <main>
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

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-heading font-bold mb-6 text-center">О компании</h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                SecurePro — профессиональный поставщик оборудования для систем безопасности с 2010 года.
                Мы работаем с объектами любой сложности: от частных домов до крупных промышленных комплексов.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 text-center">
                  <Icon name="Award" className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="font-heading font-bold mb-2 text-3xl">14+</h3>
                  <p className="text-sm text-muted-foreground">лет на рынке</p>
                </Card>
                <Card className="p-6 text-center">
                  <Icon name="Users" className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="font-heading font-bold mb-2 text-3xl">1500+</h3>
                  <p className="text-sm text-muted-foreground">реализованных проектов</p>
                </Card>
                <Card className="p-6 text-center">
                  <Icon name="Package" className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="font-heading font-bold mb-2 text-3xl">5000+</h3>
                  <p className="text-sm text-muted-foreground">наименований товаров</p>
                </Card>
                <Card className="p-6 text-center">
                  <Icon name="Wrench" className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="font-heading font-bold mb-2 text-3xl">24/7</h3>
                  <p className="text-sm text-muted-foreground">техническая поддержка</p>
                </Card>
              </div>

              <div className="mt-16 grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <Icon name="ShieldCheck" className="mb-4 text-primary" size={40} />
                  <h3 className="font-heading font-bold mb-2">Гарантия качества</h3>
                  <p className="text-sm text-muted-foreground">
                    Работаем только с сертифицированным оборудованием. Официальная гарантия от производителей.
                  </p>
                </Card>
                <Card className="p-6">
                  <Icon name="TrendingDown" className="mb-4 text-primary" size={40} />
                  <h3 className="font-heading font-bold mb-2">Лучшие цены</h3>
                  <p className="text-sm text-muted-foreground">
                    Прямые поставки от производителей. Гибкая система скидок для оптовых покупателей.
                  </p>
                </Card>
                <Card className="p-6">
                  <Icon name="Briefcase" className="mb-4 text-primary" size={40} />
                  <h3 className="font-heading font-bold mb-2">Комплексные решения</h3>
                  <p className="text-sm text-muted-foreground">
                    Проектирование, поставка, монтаж и сервисное обслуживание под ключ.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="delivery" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-heading font-bold mb-12 text-center">Доставка и оплата</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Truck" className="text-primary flex-shrink-0" size={36} />
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">Доставка по России</h3>
                      <p className="text-muted-foreground mb-3">
                        Работаем со всеми транспортными компаниями. Отправка в день заказа при наличии товара на складе.
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <Icon name="Check" size={16} className="text-primary mt-0.5" />
                          Москва и МО — курьером 1-2 дня, от 500 ₽
                        </li>
                        <li className="flex gap-2">
                          <Icon name="Check" size={16} className="text-primary mt-0.5" />
                          Регионы — ТК на выбор, 3-7 дней
                        </li>
                        <li className="flex gap-2">
                          <Icon name="Check" size={16} className="text-primary mt-0.5" />
                          Бесплатная доставка по Москве от 100 000 ₽
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Store" className="text-primary flex-shrink-0" size={36} />
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">Самовывоз со склада</h3>
                      <p className="text-muted-foreground mb-2">
                        Бесплатно со склада в Москве. Готовность заказа — от 2 часов. Работаем пн-пт 9:00-18:00.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        📍 Москва, Варшавское шоссе, д. 132
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="CreditCard" className="text-primary flex-shrink-0" size={36} />
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">Способы оплаты</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex gap-2">
                          <Icon name="Check" size={16} className="text-primary mt-0.5" />
                          Безналичный расчет для юридических лиц (с НДС и без)
                        </li>
                        <li className="flex gap-2">
                          <Icon name="Check" size={16} className="text-primary mt-0.5" />
                          Наличными или картой при получении
                        </li>
                        <li className="flex gap-2">
                          <Icon name="Check" size={16} className="text-primary mt-0.5" />
                          Рассрочка для постоянных клиентов
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-heading font-bold mb-12 text-center">Частые вопросы</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="font-heading font-semibold hover:no-underline">
                    Какая гарантия на оборудование?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Все оборудование имеет официальную гарантию производителя от 1 до 3 лет в зависимости
                    от категории. На монтажные работы предоставляем гарантию 1 год. Гарантийное обслуживание
                    осуществляется в авторизованных сервисных центрах или нашими специалистами.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-6">
                  <AccordionTrigger className="font-heading font-semibold hover:no-underline">
                    Выполняете ли вы проектирование систем?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Да, наши инженеры разработают проект системы безопасности любой сложности. Выезд специалиста
                    на объект в пределах МКАД — бесплатно. Создаём техническое задание, схему размещения
                    оборудования, смету и полный комплект документации.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-6">
                  <AccordionTrigger className="font-heading font-semibold hover:no-underline">
                    Можно ли купить товар в розницу?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Да, мы работаем как с юридическими, так и с физическими лицами. Минимальная сумма заказа
                    отсутствует. Для постоянных клиентов и оптовых покупателей действует гибкая система скидок.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-6">
                  <AccordionTrigger className="font-heading font-semibold hover:no-underline">
                    Есть ли в наличии товары на складе?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Большинство позиций каталога постоянно в наличии на нашем складе в Москве. Точную информацию
                    о наличии и сроках поставки уточняйте у менеджеров. Под заказ можем привезти любое
                    оборудование за 3-14 дней.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg px-6">
                  <AccordionTrigger className="font-heading font-semibold hover:no-underline">
                    Предоставляете ли техническую поддержку после установки?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Да, для наших клиентов работает служба технической поддержки 24/7. Выполняем настройку,
                    обучение персонала, плановое и аварийное обслуживание. Заключаем договоры на сервисное
                    обслуживание с выгодными условиями.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border rounded-lg px-6">
                  <AccordionTrigger className="font-heading font-semibold hover:no-underline">
                    Работаете ли с регионами?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Да, отправляем оборудование по всей России. Для крупных объектов возможен выезд монтажной
                    бригады в регионы. Работаем с проверенными партнёрами в крупных городах для обеспечения
                    гарантийного и постгарантийного обслуживания.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-heading font-bold mb-12 text-center">Контакты</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card className="p-6 text-center">
                  <Icon name="Phone" className="mx-auto mb-4 text-primary" size={40} />
                  <h3 className="font-heading font-bold mb-2">Телефон</h3>
                  <p className="text-muted-foreground font-mono">+7 (495) 123-45-67</p>
                  <p className="text-xs text-muted-foreground mt-2">Звонок бесплатный</p>
                </Card>
                <Card className="p-6 text-center">
                  <Icon name="Mail" className="mx-auto mb-4 text-primary" size={40} />
                  <h3 className="font-heading font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm">info@securepro.ru</p>
                  <p className="text-xs text-muted-foreground mt-2">Ответим в течение часа</p>
                </Card>
                <Card className="p-6 text-center">
                  <Icon name="Clock" className="mx-auto mb-4 text-primary" size={40} />
                  <h3 className="font-heading font-bold mb-2">Режим работы</h3>
                  <p className="text-muted-foreground text-sm">Пн-Пт: 9:00 — 18:00</p>
                  <p className="text-xs text-muted-foreground mt-2">Сб-Вс: по договорённости</p>
                </Card>
                <Card className="p-6 text-center">
                  <Icon name="MapPin" className="mx-auto mb-4 text-primary" size={40} />
                  <h3 className="font-heading font-bold mb-2">Адрес склада</h3>
                  <p className="text-muted-foreground text-sm">Москва, Варшавское ш., 132</p>
                  <p className="text-xs text-muted-foreground mt-2">Самовывоз пн-пт 9:00-18:00</p>
                </Card>
              </div>

              <Card className="p-8">
                <h3 className="font-heading font-bold text-2xl mb-6 text-center">Остались вопросы?</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя *" />
                  <Input placeholder="Телефон *" />
                  <Input placeholder="Email" className="md:col-span-2" />
                  <Textarea placeholder="Ваш вопрос..." rows={4} className="md:col-span-2" />
                  <Button className="md:col-span-2" size="lg" onClick={() => toast.success('Заявка отправлена!')}>
                    Отправить заявку
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}
