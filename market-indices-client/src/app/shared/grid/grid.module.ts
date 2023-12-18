import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    TranslateModule
  ],
  exports:[
    GridComponent
  ]
})
export class GridModule { }
