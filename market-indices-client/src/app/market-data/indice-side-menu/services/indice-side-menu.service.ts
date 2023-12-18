import { Injectable } from '@angular/core';
import { Indice } from '../../models/indice.model';
import { SideMenuItem } from '../../../shared/side-menu/models/side-menu-item.model';

@Injectable()
export class IndiceSideMenuService {

  getItems(indices: Array<Indice>): Array<SideMenuItem> {
    return indices.map((indice: Indice) => this.getItem(indice));
  }

  getItem(indice: Indice): SideMenuItem {
    return {
      id: indice.id.toString(),
      alias: indice.name,
      links: [
        {
          name: 'mainData',
          alias: 'side-menu.main-data',
          routerLink: `${indice.id}/main-data`
        },
        {
          name: 'indexComposition',
          alias: 'side-menu.index-composition',
          routerLink: `${indice.id}/index-composition`
        }
      ]
    }
  }
}
