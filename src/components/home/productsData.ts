export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  specs: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [
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
