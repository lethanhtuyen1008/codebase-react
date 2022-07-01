import { MenuState } from './menu/menuType';
import { ProductState } from './product/type';

export interface RootState {
  menuReducer: MenuState;
  productReducer: ProductState;
}
