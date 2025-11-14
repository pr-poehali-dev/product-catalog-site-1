import { Category } from '@/types/catalog';

export const categories: Category[] = [
  {
    id: 'video',
    name: 'Видеонаблюдение',
    slug: 'videonablyudenie',
    icon: 'Camera',
    description: 'Камеры, регистраторы, системы видеонаблюдения',
    subcategories: [
      { 
        id: 'video-ip-cameras', 
        name: 'IP-камеры', 
        slug: 'ip-kamery', 
        categoryId: 'video',
        subSubcategories: [
          { id: 'video-ip-2mp', name: '2 Мпикс', slug: '2mp', subcategoryId: 'video-ip-cameras' },
          { id: 'video-ip-4mp', name: '4 Мпикс', slug: '4mp', subcategoryId: 'video-ip-cameras' },
          { id: 'video-ip-6mp', name: '6 Мпикс', slug: '6mp', subcategoryId: 'video-ip-cameras' },
          { id: 'video-ip-8mp', name: '8 Мпикс', slug: '8mp', subcategoryId: 'video-ip-cameras' },
          { id: 'video-ip-12mp', name: '12 Мпикс', slug: '12mp', subcategoryId: 'video-ip-cameras' },
        ]
      },
      { id: 'video-ip-poe', name: 'IP-камеры с PoE', slug: 'ip-poe', categoryId: 'video' },
      { id: 'video-ahd', name: 'AHD-камеры', slug: 'ahd-kamery', categoryId: 'video' },
      { id: 'video-nvr', name: 'IP-видеорегистраторы (NVR)', slug: 'nvr', categoryId: 'video' },
      { id: 'video-dvr', name: 'Видеорегистраторы (DVR)', slug: 'dvr', categoryId: 'video' },
      { id: 'video-lenses', name: 'Объективы', slug: 'obektivy', categoryId: 'video' },
      { id: 'video-accessories', name: 'Аксессуары', slug: 'aksessuary', categoryId: 'video' },
    ]
  },
  {
    id: 'access',
    name: 'Контроль доступа',
    slug: 'kontrol-dostupa',
    icon: 'KeyRound',
    description: 'СКУД, замки, считыватели, турникеты',
    subcategories: [
      { id: 'access-controllers', name: 'Контроллеры', slug: 'kontrollery', categoryId: 'access' },
      { id: 'access-readers', name: 'Считыватели', slug: 'schitateli', categoryId: 'access' },
      { id: 'access-locks', name: 'Замки и защелки', slug: 'zamki', categoryId: 'access' },
      { id: 'access-biometric', name: 'Биометрические системы', slug: 'biometrika', categoryId: 'access' },
      { id: 'access-turnstiles', name: 'Турникеты', slug: 'turnikety', categoryId: 'access' },
      { id: 'access-cards', name: 'Идентификаторы', slug: 'identifikatory', categoryId: 'access' },
    ]
  },
  {
    id: 'gates',
    name: 'Автоматика ворот',
    slug: 'avtomatika-vorot',
    icon: 'DoorOpen',
    description: 'Приводы, шлагбаумы, автоматика въездных групп',
    subcategories: [
      { id: 'gates-sliding', name: 'Откатные ворота', slug: 'otkatnye', categoryId: 'gates' },
      { id: 'gates-swing', name: 'Распашные ворота', slug: 'raspashnye', categoryId: 'gates' },
      { id: 'gates-sectional', name: 'Секционные ворота', slug: 'sektsionnye', categoryId: 'gates' },
      { id: 'gates-barriers', name: 'Шлагбаумы', slug: 'shlagbaumy', categoryId: 'gates' },
      { id: 'gates-accessories', name: 'Аксессуары', slug: 'aksessuary', categoryId: 'gates' },
    ]
  },
  {
    id: 'automation',
    name: 'Автоматизация зданий',
    slug: 'avtomatizatsiya-zdaniy',
    icon: 'Building2',
    description: 'Умный дом, автоматизация инженерных систем',
    subcategories: [
      { id: 'automation-smart', name: 'Умный дом', slug: 'umnyy-dom', categoryId: 'automation' },
      { id: 'automation-lighting', name: 'Управление освещением', slug: 'osveschenie', categoryId: 'automation' },
      { id: 'automation-climate', name: 'Климат-контроль', slug: 'klimat', categoryId: 'automation' },
      { id: 'automation-sensors', name: 'Датчики', slug: 'datchiki', categoryId: 'automation' },
    ]
  },
  {
    id: 'intercom',
    name: 'Домофония',
    slug: 'domofoniya',
    icon: 'Phone',
    description: 'Видеодомофоны, вызывные панели',
    subcategories: [
      { id: 'intercom-panels', name: 'Вызывные панели', slug: 'paneli', categoryId: 'intercom' },
      { id: 'intercom-monitors', name: 'Мониторы', slug: 'monitory', categoryId: 'intercom' },
      { id: 'intercom-ip', name: 'IP-домофоны', slug: 'ip-domofony', categoryId: 'intercom' },
    ]
  },
  {
    id: 'alarm',
    name: 'Охранная сигнализация',
    slug: 'ohrannaya-signalizatsiya',
    icon: 'Bell',
    description: 'Датчики, сирены, централи',
    subcategories: [
      { id: 'alarm-panels', name: 'Контрольные панели', slug: 'paneli', categoryId: 'alarm' },
      { id: 'alarm-sensors', name: 'Датчики движения', slug: 'datchiki', categoryId: 'alarm' },
      { id: 'alarm-sirens', name: 'Оповещатели', slug: 'opoveschateli', categoryId: 'alarm' },
    ]
  },
  {
    id: 'network',
    name: 'Сетевое оборудование',
    slug: 'setevoe-oborudovanie',
    icon: 'Network',
    description: 'Коммутаторы, кабель, СКС',
    subcategories: [
      { id: 'network-switches', name: 'Коммутаторы', slug: 'kommutatory', categoryId: 'network' },
      { id: 'network-poe', name: 'PoE-коммутаторы', slug: 'poe', categoryId: 'network' },
      { id: 'network-cable', name: 'Кабель', slug: 'kabel', categoryId: 'network' },
      { id: 'network-accessories', name: 'Аксессуары СКС', slug: 'sks', categoryId: 'network' },
    ]
  },
  {
    id: 'electric',
    name: 'Электрооборудование',
    slug: 'elektrooborudovanie',
    icon: 'Zap',
    description: 'Блоки питания, ИБП, кабель',
    subcategories: [
      { id: 'electric-power', name: 'Блоки питания', slug: 'bloki-pitaniya', categoryId: 'electric' },
      { id: 'electric-ups', name: 'ИБП', slug: 'ibp', categoryId: 'electric' },
      { id: 'electric-cable', name: 'Силовой кабель', slug: 'kabel', categoryId: 'electric' },
    ]
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug);
}

export function getSubcategoryById(subcategoryId: string): { category: Category; subcategory: any } | undefined {
  for (const category of categories) {
    const subcategory = category.subcategories.find(sub => sub.id === subcategoryId);
    if (subcategory) {
      return { category, subcategory };
    }
  }
  return undefined;
}