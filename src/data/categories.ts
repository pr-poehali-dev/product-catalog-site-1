import { Category } from '@/types/catalog';

export const categories: Category[] = [
  {
    id: 'online',
    name: "Онлайн серия",
    slug: 'onlayn-seriya',
    icon: 'Camera',
    description: "Бюджетная онлайн-серия IP и Wi-Fi камер, роутеры и коммутаторы",
    subcategories: [
      { id: 'online-1', name: "IP Камеры _ ECO Cерия 2 МП", slug: 'ip-kamery-eco-ceriya-2-mp', categoryId: 'online' },
      { id: 'online-2', name: "HDCVI Камеры _ ECO Cерия 2 МП", slug: 'hdcvi-kamery-eco-ceriya-2-mp', categoryId: 'online' },
      { id: 'online-3', name: "Wi-Fi Камеры _ Cube Серия 2&4 МП", slug: 'wi-fi-kamery-cube-seriya-2-4-mp', categoryId: 'online' },
      { id: 'online-4', name: "Wi-Fi Камеры _ Cube Серия 3&5 МП", slug: 'wi-fi-kamery-cube-seriya-3-5-mp', categoryId: 'online' },
      { id: 'online-5', name: "Wi-Fi Камеры _ Hero Серия 3&5 МП", slug: 'wi-fi-kamery-hero-seriya-3-5-mp', categoryId: 'online' },
      { id: 'online-6', name: "Wi-Fi Камеры _ Picoo Серия 3&5 МП", slug: 'wi-fi-kamery-picoo-seriya-3-5-mp', categoryId: 'online' },
      { id: 'online-7', name: "Wi-Fi Камеры _ Bullet Серия 3&5 МП", slug: 'wi-fi-kamery-bullet-seriya-3-5-mp', categoryId: 'online' },
      { id: 'online-8', name: "Wi-Fi Камеры _ Turret Серия 3&5 МП", slug: 'wi-fi-kamery-turret-seriya-3-5-mp', categoryId: 'online' },
      { id: 'online-9', name: "Wi-Fi Камеры _ Battery-Powered Серия 4 МП", slug: 'wi-fi-kamery-battery-powered-seriya-4-mp', categoryId: 'online' },
      { id: 'online-10', name: "4G Камеры _ Battery-Powered Серия 4 МП", slug: '4g-kamery-battery-powered-seriya-4-mp', categoryId: 'online' },
      { id: 'online-11', name: "Wi-Fi Звонок", slug: 'wi-fi-zvonok', categoryId: 'online' },
      { id: 'online-12', name: "Домашние Wi-Fi-роутеры", slug: 'domashnie-wi-fi-routery', categoryId: 'online' },
      { id: 'online-13', name: "Коммутаторы (без POE)  _ 100 Мбит/с Серия", slug: 'kommutatory-bez-poe-100-mbit-s-seriya', categoryId: 'online' },
      { id: 'online-14', name: "Коммутаторы (без POE)  _ 1000 Мбит/с Серия", slug: 'kommutatory-bez-poe-1000-mbit-s-seriya', categoryId: 'online' },
    ]
  },
  {
    id: 'wifi-4g',
    name: "Wi-Fi и 4G камеры",
    slug: 'wifi-4g',
    icon: 'Wifi',
    description: "Беспроводные Wi-Fi и 4G камеры с автономным питанием",
    subcategories: [
      { id: 'wifi-4g-1', name: "Wi-Fi 2 МП IPC с ИК-подсветкой", slug: 'wi-fi-2-mp-ipc-s-ik-podsvetkoy', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-2', name: "Wi-Fi 2 МП PTZ с ИК-подсветкой", slug: 'wi-fi-2-mp-ptz-s-ik-podsvetkoy', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-3', name: "Wi-Fi 3 МП IPC с Smart Dual Light подсветкой", slug: 'wi-fi-3-mp-ipc-s-smart-dual-light-podsvetkoy', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-4', name: "Wi-Fi 3 МП PT с Smart Dual Light подсветкой", slug: 'wi-fi-3-mp-pt-s-smart-dual-light-podsvetkoy', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-5', name: "Wi-Fi 3 МП PT с WizColor подсветкой", slug: 'wi-fi-3-mp-pt-s-wizcolor-podsvetkoy', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-6', name: "Wi-Fi 4 МП IPC с ИК-подсветкой", slug: 'wi-fi-4-mp-ipc-s-ik-podsvetkoy', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-7', name: "Wi-Fi 4 МП PTZ с ИК-подсветкой", slug: 'wi-fi-4-mp-ptz-s-ik-podsvetkoy', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-8', name: "Wi-Fi 5 МП IPC с Smart Dual Light подсветкой", slug: 'wi-fi-5-mp-ipc-s-smart-dual-light-podsvetkoy', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-9', name: "Wi-Fi 5 МП PT с Smart Dual Light подсветкой", slug: 'wi-fi-5-mp-pt-s-smart-dual-light-podsvetkoy', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-10', name: "Wi-Fi 5 МП PT с WizColor подсветкой", slug: 'wi-fi-5-mp-pt-s-wizcolor-podsvetkoy', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-11', name: "Wi-Fi 8 МП PT с WizColor подсветкой", slug: 'wi-fi-8-mp-pt-s-wizcolor-podsvetkoy', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-12', name: "4G PT Adapter-Powered Камеры", slug: '4g-pt-adapter-powered-kamery', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-13', name: "4G IP Adapter-Powered Камеры", slug: '4g-ip-adapter-powered-kamery', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-14', name: "4G PT Battery-Powered Камеры", slug: '4g-pt-battery-powered-kamery', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-15', name: "4G IP Battery-Powered Камеры", slug: '4g-ip-battery-powered-kamery', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-16', name: "W-Fi NVR", slug: 'w-fi-nvr', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-17', name: "Memory Card", slug: 'memory-card', categoryId: 'wifi-4g' },
    ]
  },
  {
    id: 'ipc1',
    name: "IP-камеры 1 серии",
    slug: 'ipc-1-serii',
    icon: 'Camera',
    description: "IP-камеры начального уровня 1 серии",
    subcategories: [
      { id: 'ipc1-1', name: "2 МП IPC с ИК-подсветкой", slug: '2-mp-ipc-s-ik-podsvetkoy', categoryId: 'ipc1' },
      { id: 'ipc1-2', name: "2 МП IPC с Smart Dual Light подсветкой", slug: '2-mp-ipc-s-smart-dual-light-podsvetkoy', categoryId: 'ipc1' },
      { id: 'ipc1-3', name: "2 МП IPC с Smart Dual Light подсветкой (с SD-слот)", slug: '2-mp-ipc-s-smart-dual-light-podsvetkoy-s-sd-slot', categoryId: 'ipc1' },
      { id: 'ipc1-4', name: "2 МП IPC с Full-Color подсветкой", slug: '2-mp-ipc-s-full-color-podsvetkoy', categoryId: 'ipc1' },
      { id: 'ipc1-5', name: "4 МП IPC с ИК-подсветкой", slug: '4-mp-ipc-s-ik-podsvetkoy', categoryId: 'ipc1' },
      { id: 'ipc1-6', name: "4 МП IPC с Smart Dual Light подсветкой", slug: '4-mp-ipc-s-smart-dual-light-podsvetkoy', categoryId: 'ipc1' },
      { id: 'ipc1-7', name: "4 МП IPC с Full-Color подсветкой", slug: '4-mp-ipc-s-full-color-podsvetkoy', categoryId: 'ipc1' },
      { id: 'ipc1-8', name: "8 МП IPC с Smart Dual Light подсветкой", slug: '8-mp-ipc-s-smart-dual-light-podsvetkoy', categoryId: 'ipc1' },
    ]
  },
  {
    id: 'ipc2',
    name: "IP-камеры 2 серии",
    slug: 'ipc-2-serii',
    icon: 'Camera',
    description: "IP-камеры среднего уровня 2 серии",
    subcategories: [
      { id: 'ipc2-1', name: "2 МП IPC с ИК-подсветкой", slug: '2-mp-ipc-s-ik-podsvetkoy', categoryId: 'ipc2' },
      { id: 'ipc2-2', name: "2 МП IPC с Smart Dual Light подсветкой", slug: '2-mp-ipc-s-smart-dual-light-podsvetkoy', categoryId: 'ipc2' },
      { id: 'ipc2-3', name: "2 МП IPC с WizColor подсветкой", slug: '2-mp-ipc-s-wizcolor-podsvetkoy', categoryId: 'ipc2' },
      { id: 'ipc2-4', name: "2 МП IPC с Smart Dual Light подсветкой c Активным сдерживанием", slug: '2-mp-ipc-s-smart-dual-light-podsvetkoy-c-aktivnym-sderzhivan', categoryId: 'ipc2' },
      { id: 'ipc2-5', name: "4 МП IPC с Smart Dual Light подсветкой", slug: '4-mp-ipc-s-smart-dual-light-podsvetkoy', categoryId: 'ipc2' },
      { id: 'ipc2-6', name: "4 МП IPC с WizColor подсветкой", slug: '4-mp-ipc-s-wizcolor-podsvetkoy', categoryId: 'ipc2' },
      { id: 'ipc2-7', name: "4 МП IPC с Smart Dual Light подсветкой с активным сдерживанием", slug: '4-mp-ipc-s-smart-dual-light-podsvetkoy-s-aktivnym-sderzhivan', categoryId: 'ipc2' },
      { id: 'ipc2-8', name: "8 МП IPC с Smart Dual Light подсветкой", slug: '8-mp-ipc-s-smart-dual-light-podsvetkoy', categoryId: 'ipc2' },
      { id: 'ipc2-9', name: "8 МП IPC с WizColor подсветкой", slug: '8-mp-ipc-s-wizcolor-podsvetkoy', categoryId: 'ipc2' },
      { id: 'ipc2-10', name: "12 МП IPC с Smart Dual Light подсветкой", slug: '12-mp-ipc-s-smart-dual-light-podsvetkoy', categoryId: 'ipc2' },
    ]
  },
  {
    id: 'ipc35',
    name: "IP-камеры 3 и 5 серии",
    slug: 'ipc-3-5-serii',
    icon: 'Camera',
    description: "IP-камеры продвинутого уровня 3 и 5 серии с технологией ИИ",
    subcategories: [
      { id: 'ipc35-1', name: "2 МП IPC с ИК-подсветкой", slug: '2-mp-ipc-s-ik-podsvetkoy', categoryId: 'ipc35' },
      { id: 'ipc35-2', name: "2 МП IPC с Smart Dual Light подсветкой (Технология ИИ Xinghan )", slug: '2-mp-ipc-s-smart-dual-light-podsvetkoy-tehnologiya-ii-xingha', categoryId: 'ipc35' },
      { id: 'ipc35-3', name: "4 МП IPC с ИК-подсветкой", slug: '4-mp-ipc-s-ik-podsvetkoy', categoryId: 'ipc35' },
      { id: 'ipc35-4', name: "4 МП IPC с Smart Dual Light подсветкой (Технология ИИ Xinghan )", slug: '4-mp-ipc-s-smart-dual-light-podsvetkoy-tehnologiya-ii-xingha', categoryId: 'ipc35' },
      { id: 'ipc35-5', name: "4 МП IPC с Smart Dual Light подсветкой (Технология TiOC )", slug: '4-mp-ipc-s-smart-dual-light-podsvetkoy-tehnologiya-tioc', categoryId: 'ipc35' },
      { id: 'ipc35-6', name: "4 МП IPC с Smart Dual Light подсветкой (Технология TiOC, WizColor, ИИ Xinghan)", slug: '4-mp-ipc-s-smart-dual-light-podsvetkoy-tehnologiya-tioc-wizc', categoryId: 'ipc35' },
      { id: 'ipc35-7', name: "4 МП IPC с WizColor подсветкой (Технология ИИ Xinghan )", slug: '4-mp-ipc-s-wizcolor-podsvetkoy-tehnologiya-ii-xinghan', categoryId: 'ipc35' },
      { id: 'ipc35-8', name: "5 МП IPC с ИК-подсветкой", slug: '5-mp-ipc-s-ik-podsvetkoy', categoryId: 'ipc35' },
      { id: 'ipc35-9', name: "5 МП IPC с Smart Dual Light подсветкой (Технология ИИ Xinghan )", slug: '5-mp-ipc-s-smart-dual-light-podsvetkoy-tehnologiya-ii-xingha', categoryId: 'ipc35' },
      { id: 'ipc35-10', name: "8 МП IPC с Smart Dual Light подсветкой (Технология TiOC )", slug: '8-mp-ipc-s-smart-dual-light-podsvetkoy-tehnologiya-tioc', categoryId: 'ipc35' },
      { id: 'ipc35-11', name: "8 МП IPC с Smart Dual Light подсветкой (Технология TiOC, WizColor, ИИ Xinghan)", slug: '8-mp-ipc-s-smart-dual-light-podsvetkoy-tehnologiya-tioc-wizc', categoryId: 'ipc35' },
      { id: 'ipc35-12', name: "8 МП IPC с Smart Dual Light подсветкой (Технология TiOC Duo)", slug: '8-mp-ipc-s-smart-dual-light-podsvetkoy-tehnologiya-tioc-duo', categoryId: 'ipc35' },
    ]
  },
  {
    id: 'ptz',
    name: "PT и PTZ камеры",
    slug: 'pt-ptz-kamery',
    icon: 'RotateCw',
    description: "Поворотные PT и PTZ камеры с трансфокатором",
    subcategories: [
      { id: 'ptz-1', name: "PT Камеры 2&3Мп", slug: 'pt-kamery-2-3mp', categoryId: 'ptz' },
      { id: 'ptz-2', name: "PT Камеры 4&5Мп", slug: 'pt-kamery-4-5mp', categoryId: 'ptz' },
      { id: 'ptz-3', name: "PT Камеры 8Мп", slug: 'pt-kamery-8mp', categoryId: 'ptz' },
      { id: 'ptz-4', name: "PTZ Камеры 2Мп 4~5х", slug: 'ptz-kamery-2mp-4-5h', categoryId: 'ptz' },
      { id: 'ptz-5', name: "PTZ Камеры 2Мп 16х", slug: 'ptz-kamery-2mp-16h', categoryId: 'ptz' },
      { id: 'ptz-6', name: "PTZ Камеры 2Мп 25~32х", slug: 'ptz-kamery-2mp-25-32h', categoryId: 'ptz' },
      { id: 'ptz-7', name: "PTZ Камеры 4Мп 4~5х", slug: 'ptz-kamery-4mp-4-5h', categoryId: 'ptz' },
      { id: 'ptz-8', name: "PTZ Камеры 4Мп 10~16х", slug: 'ptz-kamery-4mp-10-16h', categoryId: 'ptz' },
      { id: 'ptz-9', name: "PTZ Камеры 4Мп 25~32х", slug: 'ptz-kamery-4mp-25-32h', categoryId: 'ptz' },
      { id: 'ptz-10', name: "PTZ Камеры 8Мп 32х", slug: 'ptz-kamery-8mp-32h', categoryId: 'ptz' },
      { id: 'ptz-11', name: "HDCVI PT Series", slug: 'hdcvi-pt-series', categoryId: 'ptz' },
    ]
  },
  {
    id: 'nvr124',
    name: "Видеорегистраторы NVR 1,2,4 серии",
    slug: 'nvr-1-2-4-serii',
    icon: 'HardDrive',
    description: "IP-видеорегистраторы NVR 1, 2 и 4 серии",
    subcategories: [
      { id: 'nvr124-1', name: "4-х канальные IP видеорегистраторы", slug: '4-h-kanalnye-ip-videoregistratory', categoryId: 'nvr124' },
      { id: 'nvr124-2', name: "8-ми канальные IP видеорегистраторы", slug: '8-mi-kanalnye-ip-videoregistratory', categoryId: 'nvr124' },
      { id: 'nvr124-3', name: "16-ти канальные IP видеорегистраторы", slug: '16-ti-kanalnye-ip-videoregistratory', categoryId: 'nvr124' },
      { id: 'nvr124-4', name: "32-х канальные IP видеорегистраторы", slug: '32-h-kanalnye-ip-videoregistratory', categoryId: 'nvr124' },
    ]
  },
  {
    id: 'nvr45ei',
    name: "Видеорегистраторы NVR 4,5-EI серии",
    slug: 'nvr-4-5-ei-serii',
    icon: 'HardDrive',
    description: "IP-видеорегистраторы NVR 4 и 5-EI серии с видеоаналитикой",
    subcategories: [
      { id: 'nvr45ei-1', name: "8-ми канальные IP видеорегистраторы", slug: '8-mi-kanalnye-ip-videoregistratory', categoryId: 'nvr45ei' },
      { id: 'nvr45ei-2', name: "16-ти канальные IP видеорегистраторы", slug: '16-ti-kanalnye-ip-videoregistratory', categoryId: 'nvr45ei' },
      { id: 'nvr45ei-3', name: "32-х IP видеорегистраторы", slug: '32-h-ip-videoregistratory', categoryId: 'nvr45ei' },
      { id: 'nvr45ei-4', name: "64-канальные", slug: '64-kanalnye', categoryId: 'nvr45ei' },
      { id: 'nvr45ei-5', name: "Аксессуары", slug: 'aksessuary', categoryId: 'nvr45ei' },
    ]
  },
  {
    id: 'xvr',
    name: "XVR-видеорегистраторы",
    slug: 'xvr-videoregistratory',
    icon: 'HardDrive',
    description: "Универсальные видеорегистраторы XVR",
    subcategories: [
      { id: 'xvr-1', name: "4-х канальные", slug: '4-h-kanalnye', categoryId: 'xvr' },
      { id: 'xvr-2', name: "8-ми канальные", slug: '8-mi-kanalnye', categoryId: 'xvr' },
      { id: 'xvr-3', name: "16-ти канальные", slug: '16-ti-kanalnye', categoryId: 'xvr' },
      { id: 'xvr-4', name: "32-х канальные", slug: '32-h-kanalnye', categoryId: 'xvr' },
      { id: 'xvr-5', name: "S-XVR", slug: 's-xvr', categoryId: 'xvr' },
    ]
  },
  {
    id: 'ip-intercom',
    name: "IP Домофония",
    slug: 'ip-domofoniya',
    icon: 'Phone',
    description: "IP-домофония: панели, мониторы, комплекты",
    subcategories: [
      { id: 'ip-intercom-1', name: "Смарт панели", slug: 'smart-paneli', categoryId: 'ip-intercom' },
      { id: 'ip-intercom-2', name: "IP видеомониторы", slug: 'ip-videomonitory', categoryId: 'ip-intercom' },
      { id: 'ip-intercom-3', name: "IP видеомониторы с Wi-Fi", slug: 'ip-videomonitory-s-wi-fi', categoryId: 'ip-intercom' },
      { id: 'ip-intercom-4', name: "Малоабонентские IP вызывные панели", slug: 'maloabonentskie-ip-vyzyvnye-paneli', categoryId: 'ip-intercom' },
      { id: 'ip-intercom-5', name: "Многоабонентские IP вызывные панели", slug: 'mnogoabonentskie-ip-vyzyvnye-paneli', categoryId: 'ip-intercom' },
      { id: 'ip-intercom-6', name: "Модульные IP вызывные панели", slug: 'modulnye-ip-vyzyvnye-paneli', categoryId: 'ip-intercom' },
      { id: 'ip-intercom-7', name: "Дополнительные аксессуары", slug: 'dopolnitelnye-aksessuary', categoryId: 'ip-intercom' },
      { id: 'ip-intercom-8', name: "Комплекты видеодомофонов", slug: 'komplekty-videodomofonov', categoryId: 'ip-intercom' },
    ]
  },
  {
    id: 'analog-intercom',
    name: "Аналоговая домофония",
    slug: 'analogovaya-domofoniya',
    icon: 'PhoneCall',
    description: "Аналоговая и 2-проводная домофония",
    subcategories: [
      { id: 'analog-intercom-1', name: "2х проводная домофония", slug: '2h-provodnaya-domofoniya', categoryId: 'analog-intercom' },
      { id: 'analog-intercom-2', name: "2-проводные модульные вызывные панели", slug: '2-provodnye-modulnye-vyzyvnye-paneli', categoryId: 'analog-intercom' },
      { id: 'analog-intercom-3', name: "Аналоговая домофония", slug: 'analogovaya-domofoniya-tovary', categoryId: 'analog-intercom' },
      { id: 'analog-intercom-4', name: "Комплекты 2 проводных видеодомофонов домофония", slug: 'komplekty-2-provodnyh-videodomofonov-domofoniya', categoryId: 'analog-intercom' },
      { id: 'analog-intercom-5', name: "Комплекты аналоговых видеодомофонов", slug: 'komplekty-analogovyh-videodomofonov', categoryId: 'analog-intercom' },
      { id: 'analog-intercom-6', name: "Модули сопряжения", slug: 'moduli-sopryazheniya', categoryId: 'analog-intercom' },
    ]
  },
  {
    id: 'skud',
    name: "СКУД",
    slug: 'skud',
    icon: 'KeyRound',
    description: "Системы контроля и управления доступом",
    subcategories: [
      { id: 'skud-1', name: "Турникеты", slug: 'turnikety', categoryId: 'skud' },
      { id: 'skud-2', name: "Автономные терминалы", slug: 'avtonomnye-terminaly', categoryId: 'skud' },
      { id: 'skud-3', name: "Терминалы учета времени", slug: 'terminaly-ucheta-vremeni', categoryId: 'skud' },
      { id: 'skud-4', name: "Контроллеры", slug: 'kontrollery', categoryId: 'skud' },
      { id: 'skud-5', name: "Считыватели", slug: 'schityvateli', categoryId: 'skud' },
      { id: 'skud-6', name: "USB Считыватели", slug: 'usb-schityvateli', categoryId: 'skud' },
      { id: 'skud-7', name: "Замки", slug: 'zamki', categoryId: 'skud' },
      { id: 'skud-8', name: "Кнопки", slug: 'knopki', categoryId: 'skud' },
      { id: 'skud-9', name: "Карты/брелоки доступа", slug: 'karty-breloki-dostupa', categoryId: 'skud' },
    ]
  },
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
