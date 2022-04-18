export interface Menu {
  name: string;
  route: string;
  icon: any;
}

export interface ChildrenMenu {
  name: string;
  route: string;
  icon?: any;
  value?: string;
  columnName?: string;
  type?: string;
}

export interface Menus {
  name: string;
  route: string;
  icon: any;
  mainRoute?: string;
  children?: ChildrenMenu[];
}

export interface Section {
  sectionName: string;
  menus: Menus[];
}
