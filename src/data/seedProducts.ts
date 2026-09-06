import { Product } from '@/types/catalog';
import { seedProductsPart1 } from './seedProducts1';
import { seedProductsPart2 } from './seedProducts2';
import { seedProductsPart3 } from './seedProducts3';
import { seedProductsPart4 } from './seedProducts4';
import { seedProductsPart5 } from './seedProducts5';
import { seedProductsPart6 } from './seedProducts6';

export const seedProducts: Omit<Product, 'id'>[] = [
  ...seedProductsPart1,
  ...seedProductsPart2,
  ...seedProductsPart3,
  ...seedProductsPart4,
  ...seedProductsPart5,
  ...seedProductsPart6,
];