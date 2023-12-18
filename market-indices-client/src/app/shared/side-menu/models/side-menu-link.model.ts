import { Params } from '@angular/router';

export interface SideMenuLink {
    name: string;
    alias: string;
    routerLink: string;
    queryparams?: Params;
}