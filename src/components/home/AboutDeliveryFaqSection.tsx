import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function AboutDeliveryFaqSection() {
  return (
    <>
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
    </>
  );
}
