export interface IMainDepartments {
  id: number;
  name: string;
  icon?: string;
  link: string;
}

export const mainDepartment = [
  {
    id: 1,
    name: 'Laptop, Phablet & Phones',
    icon: 'laptop',
    link: 'laptop-phablet-phones',
  },
  {
    id: 2,
    name: 'PC, Peripherals & Software',
    icon: 'desktop',
    link: 'pc-peripherals-software',
  },
  {
    id: 3,
    name: 'TV, Audio-Video & Photo',
    icon: 'tv',
    link: 'tv-audio-video-photo',
  },
  {
    id: 4,
    name: 'Home Appliances & Climate Control',
    icon: 'fridge',
    link: 'home-appliances-climate-control',
  },
  {
    id: 5,
    name: 'Gaming, Books & Office Supplies',
    icon: 'gaming',
    link: 'gaming-books-office',
  },
  {
    id: 6,
    name: 'Grocery',
    icon: 'grocery',
    link: 'grocery',
  },
  {
    id: 7,
    name: 'Fashion',
    icon: 'fashion',
    link: 'fashion',
  },
  {
    id: 8,
    name: 'Personal Care & Cosmetics',
    icon: 'cosmetics',
    link: 'personal-care-cosmetics',
  },
  {
    id: 9,
    name: 'Home, Garden & DIY',
    icon: 'home',
    link: 'home-garden-diy',
  },
  {
    id: 10,
    name: 'Sports & Travel',
    icon: 'sport',
    link: 'sports-travel',
  },
  {
    id: 11,
    name: 'Auto, Moto & Insurance',
    icon: 'car',
    link: 'auto-moto-insurance',
  },
  {
    id: 12,
    name: 'Toys, Kids & Babies',
    icon: 'toys',
    link: 'toys-kids-babies',
  },
] as const;

interface IValueOption {
  id: number;
  label: string;
  link: string;
}

interface ISubDepartment {
  id: number;
  label: string;
  valuesOptions: IValueOption[];
}

export interface IMainSubDepartment {
  id: number;
  title: string;
  subDepartmentList: ISubDepartment[];
}

export const mainSubDepartment: IMainSubDepartment[] = [
  {
    id: 0,
    title: 'laptop-phablet-phones',
    subDepartmentList: [
      {
        id: 0,
        label: 'laptops and accessories',
        valuesOptions: [
          { id: 0, label: 'Laptop with Windows', link: 'laptop-windows' },
          { id: 1, label: 'Laptop with linux', link: 'laptop-linux' },
        ],
      },
      {
        id: 1,
        label: 'phone and accessories',
        valuesOptions: [
          { id: 0, label: 'phone with Windows', link: 'phone-windows' },
          { id: 1, label: 'phone with android', link: 'phone-android' },
        ],
      },
    ],
  },
  {
    id: 1,
    title: 'pc-peripherals-software',
    subDepartmentList: [
      {
        id: 0,
        label: 'PC and accessories',
        valuesOptions: [
          { id: 0, label: 'memory ram', link: 'memory-ram' },
          { id: 1, label: 'processor', link: 'processor' },
        ],
      },
    ],
  },
] as const;
