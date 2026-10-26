import { useState } from 'react';
import { toast } from 'sonner';
import HomeHeader from '@/components/home/HomeHeader';
import HeroCatalogSection from '@/components/home/HeroCatalogSection';
import CatalogSectionsGrid from '@/components/home/CatalogSectionsGrid';
import StepsSection from '@/components/home/StepsSection';
import CompanyStrip from '@/components/home/CompanyStrip';
import ContactsSection from '@/components/home/ContactsSection';
import SiteFooter from '@/components/home/SiteFooter';
import { CartItem } from '@/components/home/productsData';

export default function Index() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });

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
      <HomeHeader
        cart={cart}
        activeSection={activeSection}
        formData={formData}
        setFormData={setFormData}
        totalPrice={totalPrice}
        scrollToSection={scrollToSection}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        handleSubmitRequest={handleSubmitRequest}
      />

      <main>
        <HeroCatalogSection scrollToSection={scrollToSection} />

        <CatalogSectionsGrid />

        <StepsSection />

        <CompanyStrip />

        <ContactsSection />
      </main>

      <SiteFooter scrollToSection={scrollToSection} />
    </div>
  );
}