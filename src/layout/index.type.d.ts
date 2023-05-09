export interface AsideMenuOption {
  name: string;
  path: string;
  title: string;
  icon?: string;
  children?: AsideMenuOption[];
}
