import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SideMenuModule } from '../../shared/side-menu/side-menu.module';
import { IndiceSideMenuComponent } from './indice-side-menu.component';
import { IndiceSideMenuService } from './services/indice-side-menu.service';



@NgModule({
  declarations: [
    IndiceSideMenuComponent
  ],
  imports: [
    CommonModule,
    SideMenuModule
  ],
  providers:[
    IndiceSideMenuService
  ],
  exports:[
    IndiceSideMenuComponent
  ]
})
export class IndiceSideMenuModule { }
