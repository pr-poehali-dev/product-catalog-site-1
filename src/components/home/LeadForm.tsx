import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const DIRECTIONS = [
  'Видеонаблюдение',
  'Контроль доступа (СКУД)',
  'Домофония',
  'Сетевое оборудование',
  'Сигнализация',
  'Другое',
];

interface LeadFormProps {
  title?: string;
  idPrefix: string;
}

export default function LeadForm({ title = 'Оставить заявку', idPrefix }: LeadFormProps) {
  const [form, setForm] = useState({ name: '', phone: '', direction: DIRECTIONS[0], object: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error('Заполните имя и телефон');
      return;
    }
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setForm({ name: '', phone: '', direction: DIRECTIONS[0], object: '' });
  };

  return (
    <form onSubmit={submit} className="bg-white text-foreground rounded-xl p-6 md:p-8 shadow-xl space-y-4">
      <h3 className="font-heading font-bold text-2xl">{title}</h3>

      <div className="space-y-1.5">
        <label htmlFor={`${idPrefix}-name`} className="text-sm text-muted-foreground">Имя</label>
        <Input
          id={`${idPrefix}-name`}
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          placeholder="Иван"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor={`${idPrefix}-phone`} className="text-sm text-muted-foreground">Телефон</label>
        <Input
          id={`${idPrefix}-phone`}
          type="tel"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          placeholder="+7 (___) ___-__-__"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor={`${idPrefix}-direction`} className="text-sm text-muted-foreground">Направление</label>
        <select
          id={`${idPrefix}-direction`}
          value={form.direction}
          onChange={e => setForm({ ...form, direction: e.target.value })}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {DIRECTIONS.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor={`${idPrefix}-object`} className="text-sm text-muted-foreground">Объект</label>
        <Input
          id={`${idPrefix}-object`}
          value={form.object}
          onChange={e => setForm({ ...form, object: e.target.value })}
          placeholder="Офис, склад, частный дом..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Отправить
      </Button>
      <p className="text-xs text-muted-foreground">
        Отправляя заявку, вы соглашаетесь с политикой конфиденциальности
      </p>
    </form>
  );
}
