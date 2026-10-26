import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface LeadFormProps {
  title: string;
  subtitle?: string;
}

export default function LeadForm({ title, subtitle }: LeadFormProps) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error('Заполните обязательные поля');
      return;
    }
    toast.success('Заявка отправлена!');
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <form onSubmit={submit} className="bg-white text-foreground rounded-xl p-6 md:p-8 shadow-xl space-y-4">
      <div>
        <h3 className="font-heading font-bold text-2xl">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground mt-2">{subtitle}</p>}
      </div>
      <Input
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        placeholder="Ваше имя *"
      />
      <Input
        type="tel"
        value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
        placeholder="Телефон *"
      />
      <Input
        type="email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        placeholder="Email"
      />
      <Textarea
        value={form.message}
        onChange={e => setForm({ ...form, message: e.target.value })}
        placeholder="Ваш вопрос..."
        rows={3}
      />
      <Button type="submit" size="lg" className="w-full">
        Отправить заявку
      </Button>
    </form>
  );
}
