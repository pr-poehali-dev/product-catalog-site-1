import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface HeroCatalogSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroCatalogSection({ scrollToSection }: HeroCatalogSectionProps) {
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
    </>
  );
}
