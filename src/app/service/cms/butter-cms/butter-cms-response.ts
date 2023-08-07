
export class Meta {
  id!: number;
}

export class MenuItem {
  meta!: Meta;
  label!: string;
  url!: string;
}

export class NavigationMenu {
  meta!: Meta;
  name!: string;
  menu_items!: MenuItem[];
}

export class Data {
  navigation_menu!: NavigationMenu[];
}

export class Response {
  meta!: Meta;
  data!: Data;
}