import { Component, Input } from '@angular/core';
import { SideMenuItem } from 'src/app/shared/side-menu/models/side-menu-item.model';
import { Indice } from '../models/indice.model';
import { IndiceSideMenuService } from './services/indice-side-menu.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'mi-indice-side-menu',
  templateUrl: './indice-side-menu.component.html',
  styleUrls: ['./indice-side-menu.component.scss']
})
export class IndiceSideMenuComponent {

  @Input() set indices(value: Array<Indice>) {
    this.sideMenuItems = this.indiceSideMenuService.getItems(value);
  }

  sideMenuItems: Array<SideMenuItem> = [];
  activeItem: SideMenuItem;

  private _destroyed$ = new Subject<void>();

  constructor(private route: ActivatedRoute,
              private indiceSideMenuService: IndiceSideMenuService) { }

  ngOnInit(): void {
    this.route.children[0]?.params.pipe(takeUntil(this._destroyed$)).subscribe(params => {
      const indiceId = params['indiceId'];
      this.activeItem = this.sideMenuItems.find((item: SideMenuItem) => item.id === indiceId) as SideMenuItem;
    })
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
