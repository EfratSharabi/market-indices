import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexCompositionComponent } from './index-composition.component';
import { IndexCompositionGridComponent } from './components/index-composition-grid/index-composition-grid.component';
import { IndexCompositionRoutingModule } from './routing/index-composition-routing.module';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { IndiceDataModule } from '../indice-data/indice-data.module';
import { GridModule } from 'src/app/shared/grid/grid.module';


@NgModule({
  declarations: [
    IndexCompositionComponent,
    IndexCompositionGridComponent
  ],
  imports: [
    CommonModule,
    IndexCompositionRoutingModule,
    TranslateModule,
    IndiceDataModule,
    GridModule
  ]
})
export class IndexCompositionModule { }
