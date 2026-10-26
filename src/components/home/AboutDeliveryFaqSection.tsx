import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import CompanyStrip from './CompanyStrip';

export default function AboutDeliveryFaqSection() {
  return (
    <>
      <CompanyStrip />

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
    </>
  );
}
