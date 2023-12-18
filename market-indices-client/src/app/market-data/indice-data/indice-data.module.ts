import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndiceDataComponent } from './indice-data.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { PipesModule } from '../../shared/pipes/pipes.module';



@NgModule({
  declarations: [
    IndiceDataComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    PipesModule
  ],
  exports: [
    IndiceDataComponent
  ]
})
export class IndiceDataModule { }
