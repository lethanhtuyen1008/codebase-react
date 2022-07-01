import { ProductState, ON_ADD_TO_CART, ON_REMOVE_TO_CART } from './type';
import { ProductAction } from './action';

const initialState: ProductState = {
  cart: [],
};

export function productReducer(
  state: ProductState = initialState,
  action: ProductAction,
): ProductState {
  switch (action.type) {
    case ON_ADD_TO_CART:
      const index = state.cart.findIndex((item) => {
        return item.product.id === action.product.id;
      });
      if (index !== -1) {
        state.cart[index].count = state.cart[index].count + 1;
      } else {
        state.cart.push({ count: 1, product: action.product });
      }

      return {
        ...state,
      };
    case ON_REMOVE_TO_CART:
      let newState = state.cart;
      newState = state.cart.filter((item) => item.product.id !== action.product.id);

      return {
        cart: newState,
      };
    default:
      return state;
  }
}
