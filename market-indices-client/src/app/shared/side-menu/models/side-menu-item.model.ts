import { SideMenuLink } from './side-menu-link.model';

export interface SideMenuItem {
    id: string;
    alias: string;
    links: Array<SideMenuLink>;
}