import { Product } from 'src/types/product';

export interface ProductState {
  cart: {
    count: number;
    product: Product;
  }[];
}

export const ON_ADD_TO_CART = 'ON_ADD_TO_CART';
export const ON_REMOVE_TO_CART = 'ON_REMOVE_TO_CART';
// const cart = [
//   {
//     count: 1,
//     product: {
//       id: 1,
//       name: 'Iphone',
//     },
//   },
// ];
