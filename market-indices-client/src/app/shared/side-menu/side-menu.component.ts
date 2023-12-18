import { AfterViewInit, Component, Input, QueryList, ViewChildren } from '@angular/core';
import { SideMenuItem } from './models/side-menu-item.model';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'mi-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements AfterViewInit {

  @Input() items: Array<SideMenuItem> = [];
  @Input() activeItem: SideMenuItem;


  @ViewChildren(MatExpansionPanel) matExpansionPanels: QueryList<MatExpansionPanel>;

  ngAfterViewInit(): void {
    this.openActiveItem();
  }

  private openActiveItem(): void {
    if (this.activeItem) {
      const index = this.items.indexOf(this.activeItem);
      if (index !== -1) {
        this.matExpansionPanels.get(index)?.open();
      }
    }
  }
}
