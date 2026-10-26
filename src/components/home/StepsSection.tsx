const steps = [
  { title: 'Ваша заявка', text: 'Вы оставляете заявку или звоните нам, мы уточняем задачу' },
  { title: 'Встреча на объекте', text: 'Приезжаем, осматриваем объект и обсуждаем детали' },
  { title: 'Индивидуальное предложение', text: 'Анализируем задачу и готовим предложение с подбором оборудования' },
  { title: 'Договор и оплата', text: 'Заключаем договор, согласуем оплату и время начала работ' },
  { title: 'Работы и запуск', text: 'Выполняем поставку и монтаж, запускаем систему и обучаем вас' },
];

export default function StepsSection() {
  return (
    <section id="steps" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-10">Этапы работы</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {steps.map((step, index) => (
            <div key={step.title} className="bg-white rounded-lg p-6 border">
              <div className="text-3xl font-heading font-bold text-primary mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-heading font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
