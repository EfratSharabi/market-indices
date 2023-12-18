import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDataComponent } from './main-data.component';
import { MainDataRoutingModule } from './routing/main-data-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { IndiceProminentFluctsComponent } from './components/indice-prominent-flucts/indice-prominent-flucts.component';
import { IndiceWeeklyDataGraphComponent } from './components/indice-weekly-data-graph/indice-weekly-data-graph.component';
import { MatCardModule } from '@angular/material/card'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { IndiceDataModule } from '../indice-data/indice-data.module';
import { PipesModule } from '../../shared/pipes/pipes.module';


@NgModule({
  declarations: [
    MainDataComponent,
    IndiceProminentFluctsComponent,
    IndiceWeeklyDataGraphComponent
  ],
  imports: [
    CommonModule,
    MainDataRoutingModule,
    TranslateModule,
    MatCardModule,
    NgxChartsModule,
    IndiceDataModule,
    PipesModule
  ]
})
export class MainDataModule { }
