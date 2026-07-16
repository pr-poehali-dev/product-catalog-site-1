import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

export default function ContactsSection() {
  return (
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
  );
}
