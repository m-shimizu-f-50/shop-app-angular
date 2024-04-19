export interface Product {
  name: string;
  price: number;
  description: string;
  heading1: string;
  heading2: string;
  heading3: string;
  image: string;
}

export const products = [
  {
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    heading1: 'ヘッディング1',
    heading2: 'ヘッディング2',
    heading3: 'ヘッディング3',
    image: './assets/img/phone-cover.jpg',
  },
  {
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    heading1: 'ヘッディング2-1',
    heading2: 'ヘッディング2-2',
    heading3: 'ヘッディング2-3',
    image: './assets/img/phone-cover.jpg',
  },
  {
    name: 'Phone Standard',
    price: 299,
    description: '',
    heading1: 'ヘッディング3-1',
    heading2: 'ヘッディング3-2',
    heading3: 'ヘッディング3-3',
    image: './assets/img/phone-cover.jpg',
  },
];
