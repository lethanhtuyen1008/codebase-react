import { OPEN_MENU } from './menuType';

export interface MenuOpenAction {
  type: typeof OPEN_MENU;
  open: string;
}

export type MenuAction = MenuOpenAction;
