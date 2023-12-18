import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SideMenuComponent } from './side-menu.component';

@NgModule({
    declarations: [
        SideMenuComponent
    ],
    imports: [
        CommonModule,
        MatExpansionModule,
        RouterModule,
        TranslateModule
    ],
    exports: [
        SideMenuComponent
    ]
})
export class SideMenuModule { }
