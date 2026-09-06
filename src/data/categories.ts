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
      { id: 'wifi-4g-1', name: "Wi-Fi 2 МП IPC с ИК-подсветкой", slug: 'wi-fi-2-mp-ipc-s-ik-podsvetkoi', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-2', name: "Wi-Fi 2 МП PTZ с ИК-подсветкой", slug: 'wi-fi-2-mp-ptz-s-ik-podsvetkoi', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-3', name: "Wi-Fi 3 МП IPC с Smart Dual Light подсветкой", slug: 'wi-fi-3-mp-ipc-s-smart-dual-light-podsvetkoi', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-4', name: "Wi-Fi 3 МП PT с Smart Dual Light подсветкой", slug: 'wi-fi-3-mp-pt-s-smart-dual-light-podsvetkoi', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-5', name: "Wi-Fi 3 МП PT с WizColor подсветкой", slug: 'wi-fi-3-mp-pt-s-wizcolor-podsvetkoi', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-6', name: "Wi-Fi 4 МП IPC с ИК-подсветкой", slug: 'wi-fi-4-mp-ipc-s-ik-podsvetkoi', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-7', name: "Wi-Fi 4 МП PTZ с ИК-подсветкой", slug: 'wi-fi-4-mp-ptz-s-ik-podsvetkoi', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-8', name: "Wi-Fi 5 МП IPC с Smart Dual Light подсветкой", slug: 'wi-fi-5-mp-ipc-s-smart-dual-light-podsvetkoi', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-9', name: "Wi-Fi 5 МП PT с Smart Dual Light подсветкой", slug: 'wi-fi-5-mp-pt-s-smart-dual-light-podsvetkoi', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-10', name: "Wi-Fi 5 МП PT с WizColor подсветкой", slug: 'wi-fi-5-mp-pt-s-wizcolor-podsvetkoi', categoryId: 'wifi-4g' },
      { id: 'wifi-4g-11', name: "Wi-Fi 8 МП PT с WizColor подсветкой", slug: 'wi-fi-8-mp-pt-s-wizcolor-podsvetkoi', categoryId: 'wifi-4g' },
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
      { id: 'ipc1-1', name: "2 МП IPC с ИК-подсветкой", slug: '2-mp-ipc-s-ik-podsvetkoi', categoryId: 'ipc1' },
      { id: 'ipc1-2', name: "2 МП IPC с Smart Dual Light подсветкой", slug: '2-mp-ipc-s-smart-dual-light-podsvetkoi', categoryId: 'ipc1' },
      { id: 'ipc1-3', name: "2 МП IPC с Smart Dual Light подсветкой (с SD-слот)", slug: '2-mp-ipc-s-smart-dual-light-podsvetkoi-s-sd-slot', categoryId: 'ipc1' },
      { id: 'ipc1-4', name: "2 МП IPC с Full-Color подсветкой", slug: '2-mp-ipc-s-full-color-podsvetkoi', categoryId: 'ipc1' },
      { id: 'ipc1-5', name: "4 МП IPC с ИК-подсветкой", slug: '4-mp-ipc-s-ik-podsvetkoi', categoryId: 'ipc1' },
      { id: 'ipc1-6', name: "4 МП IPC с Smart Dual Light подсветкой", slug: '4-mp-ipc-s-smart-dual-light-podsvetkoi', categoryId: 'ipc1' },
      { id: 'ipc1-7', name: "4 МП IPC с Full-Color подсветкой", slug: '4-mp-ipc-s-full-color-podsvetkoi', categoryId: 'ipc1' },
      { id: 'ipc1-8', name: "8 МП IPC с Smart Dual Light подсветкой", slug: '8-mp-ipc-s-smart-dual-light-podsvetkoi', categoryId: 'ipc1' },
    ]
  },
  {
    id: 'ipc2',
    name: "IP-камеры 2 серии",
    slug: 'ipc-2-serii',
    icon: 'Camera',
    description: "IP-камеры среднего уровня 2 серии",
    subcategories: [
      { id: 'ipc2-1', name: "2 МП IPC с ИК-подсветкой", slug: '2-mp-ipc-s-ik-podsvetkoi', categoryId: 'ipc2' },
      { id: 'ipc2-2', name: "2 МП IPC с Smart Dual Light подсветкой", slug: '2-mp-ipc-s-smart-dual-light-podsvetkoi', categoryId: 'ipc2' },
      { id: 'ipc2-3', name: "2 МП IPC с WizColor подсветкой", slug: '2-mp-ipc-s-wizcolor-podsvetkoi', categoryId: 'ipc2' },
      { id: 'ipc2-4', name: "2 МП IPC с Smart Dual Light подсветкой c Активным сдерживанием", slug: '2-mp-ipc-s-smart-dual-light-podsvetkoi-c-aktivnym-sderzhivan', categoryId: 'ipc2' },
      { id: 'ipc2-5', name: "4 МП IPC с Smart Dual Light подсветкой", slug: '4-mp-ipc-s-smart-dual-light-podsvetkoi', categoryId: 'ipc2' },
      { id: 'ipc2-6', name: "4 МП IPC с WizColor подсветкой", slug: '4-mp-ipc-s-wizcolor-podsvetkoi', categoryId: 'ipc2' },
      { id: 'ipc2-7', name: "4 МП IPC с Smart Dual Light подсветкой с активным сдерживанием", slug: '4-mp-ipc-s-smart-dual-light-podsvetkoi-s-aktivnym-sderzhivan', categoryId: 'ipc2' },
      { id: 'ipc2-8', name: "8 МП IPC с Smart Dual Light подсветкой", slug: '8-mp-ipc-s-smart-dual-light-podsvetkoi', categoryId: 'ipc2' },
      { id: 'ipc2-9', name: "8 МП IPC с WizColor подсветкой", slug: '8-mp-ipc-s-wizcolor-podsvetkoi', categoryId: 'ipc2' },
      { id: 'ipc2-10', name: "12 МП IPC с Smart Dual Light подсветкой", slug: '12-mp-ipc-s-smart-dual-light-podsvetkoi', categoryId: 'ipc2' },
    ]
  },
  {
    id: 'ipc35',
    name: "IP-камеры 3 и 5 серии",
    slug: 'ipc-3-5-serii',
    icon: 'Camera',
    description: "IP-камеры продвинутого уровня 3 и 5 серии с технологией ИИ",
    subcategories: [
      { id: 'ipc35-1', name: "2 МП IPC с ИК-подсветкой", slug: '2-mp-ipc-s-ik-podsvetkoi', categoryId: 'ipc35' },
      { id: 'ipc35-2', name: "2 МП IPC с Smart Dual Light подсветкой (Технология ИИ Xinghan )", slug: '2-mp-ipc-s-smart-dual-light-podsvetkoi-tehnologiya-ii-xingha', categoryId: 'ipc35' },
      { id: 'ipc35-3', name: "4 МП IPC с ИК-подсветкой", slug: '4-mp-ipc-s-ik-podsvetkoi', categoryId: 'ipc35' },
      { id: 'ipc35-4', name: "4 МП IPC с Smart Dual Light подсветкой (Технология ИИ Xinghan )", slug: '4-mp-ipc-s-smart-dual-light-podsvetkoi-tehnologiya-ii-xingha', categoryId: 'ipc35' },
      { id: 'ipc35-5', name: "4 МП IPC с Smart Dual Light подсветкой (Технология TiOC )", slug: '4-mp-ipc-s-smart-dual-light-podsvetkoi-tehnologiya-tioc', categoryId: 'ipc35' },
      { id: 'ipc35-6', name: "4 МП IPC с Smart Dual Light подсветкой (Технология TiOC, WizColor, ИИ Xinghan)", slug: '4-mp-ipc-s-smart-dual-light-podsvetkoi-tehnologiya-tioc-wizc', categoryId: 'ipc35' },
      { id: 'ipc35-7', name: "4 МП IPC с WizColor подсветкой (Технология ИИ Xinghan )", slug: '4-mp-ipc-s-wizcolor-podsvetkoi-tehnologiya-ii-xinghan', categoryId: 'ipc35' },
      { id: 'ipc35-8', name: "5 МП IPC с ИК-подсветкой", slug: '5-mp-ipc-s-ik-podsvetkoi', categoryId: 'ipc35' },
      { id: 'ipc35-9', name: "5 МП IPC с Smart Dual Light подсветкой (Технология ИИ Xinghan )", slug: '5-mp-ipc-s-smart-dual-light-podsvetkoi-tehnologiya-ii-xingha', categoryId: 'ipc35' },
      { id: 'ipc35-10', name: "8 МП IPC с Smart Dual Light подсветкой (Технология TiOC )", slug: '8-mp-ipc-s-smart-dual-light-podsvetkoi-tehnologiya-tioc', categoryId: 'ipc35' },
      { id: 'ipc35-11', name: "8 МП IPC с Smart Dual Light подсветкой (Технология TiOC, WizColor, ИИ Xinghan)", slug: '8-mp-ipc-s-smart-dual-light-podsvetkoi-tehnologiya-tioc-wizc', categoryId: 'ipc35' },
      { id: 'ipc35-12', name: "8 МП IPC с Smart Dual Light подсветкой (Технология TiOC Duo)", slug: '8-mp-ipc-s-smart-dual-light-podsvetkoi-tehnologiya-tioc-duo', categoryId: 'ipc35' },
    ]
  },
  {
    id: 'ptz',
    name: "PT и PTZ камеры",
    slug: 'ptz-kamery',
    icon: 'Video',
    description: "Поворотные PT и PTZ камеры",
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
    description: "Сетевые видеорегистраторы NVR 1,2,4 серии",
    subcategories: [
      { id: 'nvr124-1', name: "4-х канальные IP видеорегистраторы", slug: '4-h-kanalnye-ip-videoregistratory', categoryId: 'nvr124' },
      { id: 'nvr124-2', name: "8-ми канальные IP видеорегистраторы", slug: '8-mi-kanalnye-ip-videoregistratory', categoryId: 'nvr124' },
      { id: 'nvr124-3', name: "16-ти канальные IP видеорегистраторы", slug: '16-ti-kanalnye-ip-videoregistratory', categoryId: 'nvr124' },
      { id: 'nvr124-4', name: "32-х канальные IP видеорегистраторы", slug: '32-h-kanalnye-ip-videoregistratory', categoryId: 'nvr124' },
    ]
  },
  {
    id: 'hdcvi',
    name: "HDCVI-камеры",
    slug: 'hdcvi-kamery',
    icon: 'Camera',
    description: "Аналоговые HDCVI-видеокамеры",
    subcategories: [
      { id: 'hdcvi-1', name: "Cooper 2 МП HDCVI с ИК- подсветкой", slug: 'cooper-2-mp-hdcvi-s-ik-podsvetkoi', categoryId: 'hdcvi' },
      { id: 'hdcvi-2', name: "Cooper 2 МП HDCVI с Smart Dual Light подсветкой", slug: 'cooper-2-mp-hdcvi-s-smart-dual-light-podsvetkoi', categoryId: 'hdcvi' },
      { id: 'hdcvi-3', name: "1 серия 2 МП HDCVI с ИК-подсветкой", slug: '1-seriya-2-mp-hdcvi-s-ik-podsvetkoi', categoryId: 'hdcvi' },
      { id: 'hdcvi-4', name: "1 серия 2 МП HDCVI с Smart Dual Light подсветкой", slug: '1-seriya-2-mp-hdcvi-s-smart-dual-light-podsvetkoi', categoryId: 'hdcvi' },
      { id: 'hdcvi-5', name: "1 серия 2 МП HDCVI с Full-Color подсветкой", slug: '1-seriya-2-mp-hdcvi-s-full-color-podsvetkoi', categoryId: 'hdcvi' },
      { id: 'hdcvi-6', name: "1 серия 2 МП HDCVI с WizColor подсветкой", slug: '1-seriya-2-mp-hdcvi-s-wizcolor-podsvetkoi', categoryId: 'hdcvi' },
      { id: 'hdcvi-7', name: "Cooper 5 МП HDCVI с ИК- подсветкой", slug: 'cooper-5-mp-hdcvi-s-ik-podsvetkoi', categoryId: 'hdcvi' },
      { id: 'hdcvi-8', name: "Cooper 5 МП HDCVI с Smart Dual Light подсветкой", slug: 'cooper-5-mp-hdcvi-s-smart-dual-light-podsvetkoi', categoryId: 'hdcvi' },
      { id: 'hdcvi-9', name: "1 серия 5 МП HDCVI с ИК-подсветкой", slug: '1-seriya-5-mp-hdcvi-s-ik-podsvetkoi', categoryId: 'hdcvi' },
      { id: 'hdcvi-10', name: "1 серия 5 МП HDCVI с Smart Dual Light подсветкой", slug: '1-seriya-5-mp-hdcvi-s-smart-dual-light-podsvetkoi', categoryId: 'hdcvi' },
      { id: 'hdcvi-11', name: "1 серия 5 МП HDCVI с Full-Color подсветкой", slug: '1-seriya-5-mp-hdcvi-s-full-color-podsvetkoi', categoryId: 'hdcvi' },
      { id: 'hdcvi-12', name: "1 серия 5 МП HDCVI с WizColor подсветкой", slug: '1-seriya-5-mp-hdcvi-s-wizcolor-podsvetkoi', categoryId: 'hdcvi' },
      { id: 'hdcvi-13', name: "1 серия 5 МП HDCVI с ИК-подсветкой", slug: '1-seriya-5-mp-hdcvi-s-ik-podsvetkoi-2', categoryId: 'hdcvi' },
      { id: 'hdcvi-14', name: "1 серия 8 МП HDCVI с Smart Dual Light подсветкой", slug: '1-seriya-8-mp-hdcvi-s-smart-dual-light-podsvetkoi', categoryId: 'hdcvi' },
      { id: 'hdcvi-15', name: "2&3 серия", slug: '2-3-seriya', categoryId: 'hdcvi' },
    ]
  },
  {
    id: 'nvr45ei',
    name: "Видеорегистраторы NVR 4,5-EI серии",
    slug: 'nvr-4-5-ei-serii',
    icon: 'HardDrive',
    description: "Сетевые видеорегистраторы NVR 4,5-EI серии",
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
    description: "Гибридные XVR-видеорегистраторы",
    subcategories: [
      { id: 'xvr-1', name: "4-х канальные", slug: '4-h-kanalnye', categoryId: 'xvr' },
      { id: 'xvr-2', name: "8-ми канальные", slug: '8-mi-kanalnye', categoryId: 'xvr' },
      { id: 'xvr-3', name: "16-ти канальные", slug: '16-ti-kanalnye', categoryId: 'xvr' },
      { id: 'xvr-4', name: "32-х канальные", slug: '32-h-kanalnye', categoryId: 'xvr' },
      { id: 'xvr-5', name: "S-XVR", slug: 's-xvr', categoryId: 'xvr' },
    ]
  },
  {
    id: 'network',
    name: "Сетевое оборудование",
    slug: 'setevoe-oborudovanie',
    icon: 'Network',
    description: "Коммутаторы и сетевое оборудование",
    subcategories: [
      { id: 'network-1', name: "Коммутаторы PoE с функцией облачного управления 100 Мбит/с", slug: 'kommutatory-poe-s-funkciei-oblachnogo-upravleniya-100-mbit-s', categoryId: 'network' },
      { id: 'network-2', name: "Коммутаторы PoE с функцией облачного управления 1000 Мбит/с", slug: 'kommutatory-poe-s-funkciei-oblachnogo-upravleniya-1000-mbit-', categoryId: 'network' },
      { id: 'network-3', name: "Коммутаторы PoE на DIN-рейку с функцией облачного управления", slug: 'kommutatory-poe-na-din-reiku-s-funkciei-oblachnogo-upravleni', categoryId: 'network' },
      { id: 'network-4', name: "Настольные коммутаторы с PoE серии Flat", slug: 'nastolnye-kommutatory-s-poe-serii-flat', categoryId: 'network' },
      { id: 'network-5', name: "Настольные коммутаторы с PoE", slug: 'nastolnye-kommutatory-s-poe', categoryId: 'network' },
      { id: 'network-6', name: "Коммутаторы на DIN-рейку с функцией облачного управления", slug: 'kommutatory-na-din-reiku-s-funkciei-oblachnogo-upravleniya', categoryId: 'network' },
      { id: 'network-7', name: "Коммутаторы (без POE)", slug: 'kommutatory-bez-poe', categoryId: 'network' },
      { id: 'network-8', name: "Коммутаторы с функцией облачного управления", slug: 'kommutatory-s-funkciei-oblachnogo-upravleniya', categoryId: 'network' },
      { id: 'network-9', name: "Коммутаторы PoE", slug: 'kommutatory-poe', categoryId: 'network' },
      { id: 'network-10', name: "Гигабитные коммутаторы PoE", slug: 'gigabitnye-kommutatory-poe', categoryId: 'network' },
      { id: 'network-11', name: "Коммутаторы с EPoE", slug: 'kommutatory-s-epoe', categoryId: 'network' },
      { id: 'network-12', name: "PoE коммутаторы на DIN-рейку", slug: 'poe-kommutatory-na-din-reiku', categoryId: 'network' },
      { id: 'network-13', name: "Промышленные PoE коммутаторы", slug: 'promyshlennye-poe-kommutatory', categoryId: 'network' },
      { id: 'network-14', name: "Оптические модули", slug: 'opticheskie-moduli', categoryId: 'network' },
      { id: 'network-15', name: "Аксессуары", slug: 'aksessuary', categoryId: 'network' },
      { id: 'network-16', name: "Точки доступа", slug: 'tochki-dostupa', categoryId: 'network' },
    ]
  },
  {
    id: 'parking',
    name: "Решения для парковок",
    slug: 'resheniya-dlya-parkovok',
    icon: 'ParkingSquare',
    description: "Оборудование для автоматизации парковок",
    subcategories: [
      { id: 'parking-1', name: "ANPR", slug: 'anpr', categoryId: 'parking' },
      { id: 'parking-2', name: "Шлагбаумы и радары", slug: 'shlagbaumy-i-radary', categoryId: 'parking' },
    ]
  },
  {
    id: 'alarm',
    name: "Сигнализация",
    slug: 'signalizaciya',
    icon: 'ShieldAlert',
    description: "Охранная сигнализация",
    subcategories: [
      { id: 'alarm-1', name: "Контроллеры охранной сигнализации", slug: 'kontrollery-ohrannoi-signalizacii', categoryId: 'alarm' },
      { id: 'alarm-2', name: "Сменные источники питания", slug: 'smennye-istochniki-pitaniya', categoryId: 'alarm' },
      { id: 'alarm-3', name: "Извещатели", slug: 'izveschateli', categoryId: 'alarm' },
      { id: 'alarm-4', name: "Беспроводной пульт", slug: 'besprovodnoi-pult', categoryId: 'alarm' },
      { id: 'alarm-5', name: "Брелоки управления", slug: 'breloki-upravleniya', categoryId: 'alarm' },
      { id: 'alarm-6', name: "Кнопки тревоги", slug: 'knopki-trevogi', categoryId: 'alarm' },
      { id: 'alarm-7', name: "Ретрансляторы беспроводного сигнала", slug: 'retranslyatory-besprovodnogo-signala', categoryId: 'alarm' },
      { id: 'alarm-8', name: "Датчики двери", slug: 'datchiki-dveri', categoryId: 'alarm' },
      { id: 'alarm-9', name: "Модули интеграции", slug: 'moduli-integracii', categoryId: 'alarm' },
      { id: 'alarm-10', name: "ИК-датчики", slug: 'ik-datchiki', categoryId: 'alarm' },
      { id: 'alarm-11', name: "Датчики разбития стекла", slug: 'datchiki-razbitiya-stekla', categoryId: 'alarm' },
      { id: 'alarm-12', name: "Датчики дыма", slug: 'datchiki-dyma', categoryId: 'alarm' },
      { id: 'alarm-13', name: "Датчики угарного газа", slug: 'datchiki-ugarnogo-gaza', categoryId: 'alarm' },
      { id: 'alarm-14', name: "Датчики протечки воды", slug: 'datchiki-protechki-vody', categoryId: 'alarm' },
      { id: 'alarm-15', name: "Реле", slug: 'rele', categoryId: 'alarm' },
      { id: 'alarm-16', name: "Модули тревожных входов и выходов", slug: 'moduli-trevozhnyh-vhodov-i-vyhodov', categoryId: 'alarm' },
      { id: 'alarm-17', name: "Умные розетки", slug: 'umnye-rozetki', categoryId: 'alarm' },
      { id: 'alarm-18', name: "Комплекты", slug: 'komplekty', categoryId: 'alarm' },
    ]
  },
  {
    id: 'monitor',
    name: "Мониторы CCTV",
    slug: 'monitor-cctv',
    icon: 'Monitor',
    description: "Мониторы для видеонаблюдения",
    subcategories: [
      { id: 'monitor-1', name: "Стандарт", slug: 'standart', categoryId: 'monitor' },
      { id: 'monitor-2', name: "Ультра", slug: 'ultra', categoryId: 'monitor' },
    ]
  },
  {
    id: 'remote',
    name: "Пульты управления",
    slug: 'pulty-upravleniya',
    icon: 'Gamepad2',
    description: "Пульты PTZ-управления",
    subcategories: [
      { id: 'remote-1', name: "Пульты управления", slug: 'pulty-upravleniya', categoryId: 'remote' },
    ]
  },
  {
    id: 'ip-intercom',
    name: "IP Домофония",
    slug: 'ip-domofoniya',
    icon: 'DoorOpen',
    description: "IP-домофония и смарт-панели",
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
    icon: 'DoorOpen',
    description: "Аналоговая 2/4-проводная домофония",
    subcategories: [
      { id: 'analog-intercom-1', name: "2х проводная домофония", slug: '2h-provodnaya-domofoniya', categoryId: 'analog-intercom' },
      { id: 'analog-intercom-2', name: "2-проводные модульные вызывные панели", slug: '2-provodnye-modulnye-vyzyvnye-paneli', categoryId: 'analog-intercom' },
      { id: 'analog-intercom-3', name: "Аналоговая домофония", slug: 'analogovaya-domofoniya', categoryId: 'analog-intercom' },
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
  {
    id: 'accessories',
    name: "Аксессуары",
    slug: 'aksessuary',
    icon: 'Package',
    description: "Кронштейны и аксессуары для видеокамер",
    subcategories: [
      { id: 'accessories-1', name: "Кронштейны и аксессуары для видеокамер", slug: 'kronshteiny-i-aksessuary-dlya-videokamer', categoryId: 'accessories' },
      { id: 'accessories-2', name: "Аксессуары HDCVI", slug: 'aksessuary-hdcvi', categoryId: 'accessories' },
      { id: 'accessories-3', name: "Передача видеосигнала", slug: 'peredacha-videosignala', categoryId: 'accessories' },
      { id: 'accessories-4', name: "Микрофоны", slug: 'mikrofony', categoryId: 'accessories' },
    ]
  },
  {
    id: 'thermal',
    name: "Тепловизоры",
    slug: 'teplovizory',
    icon: 'Thermometer',
    description: "Тепловизионные камеры",
    subcategories: [
      { id: 'thermal-1', name: "Тепловизоры гибридные", slug: 'teplovizory-gibridnye', categoryId: 'thermal' },
      { id: 'thermal-2', name: "Тепловизоры гибридные", slug: 'teplovizory-gibridnye-2', categoryId: 'thermal' },
      { id: 'thermal-3', name: "Тепловизоры гибридные c измерением температуры", slug: 'teplovizory-gibridnye-c-izmereniem-temperatury', categoryId: 'thermal' },
      { id: 'thermal-4', name: "Тепловизоры гибридные c измерением температуры", slug: 'teplovizory-gibridnye-c-izmereniem-temperatury-2', categoryId: 'thermal' },
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