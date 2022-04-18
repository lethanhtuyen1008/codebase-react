import { MenuState, OPEN_MENU } from './menuType';
import { MenuAction } from './menuAction';

const initialState: MenuState = {
  open: window.location.pathname,
};

export function menuReducer(state: MenuState = initialState, action: MenuAction): MenuState {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        open: action.open,
      };

    default:
      return state;
  }
}
