import { Product } from 'src/types/product';
import { ON_ADD_TO_CART, ON_REMOVE_TO_CART } from './type';
export interface AddToCartAction {
  type: typeof ON_ADD_TO_CART;
  product: Product;
}

export interface OnDeleteAction {
  type: typeof ON_REMOVE_TO_CART;
  product: Product;
}
export type ProductAction = AddToCartAction | OnDeleteAction;
