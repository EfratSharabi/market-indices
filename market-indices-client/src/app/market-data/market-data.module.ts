import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndiceSideMenuModule } from './indice-side-menu/indice-side-menu.module';
import { MarketDataComponent } from './market-data.component';
import { MarketDataRoutingModule } from './routing/market-data-routing.module';
import { IndiceApiService } from './services/indice-api.service';
import { IndicesService } from './services/indices.service';

@NgModule({
  declarations: [
    MarketDataComponent
  ],
  imports: [
    CommonModule,
    IndiceSideMenuModule,
    MarketDataRoutingModule,
  ],
  providers:[
    IndiceApiService,
    IndicesService
  ]
})
export class MarketDataModule { }
