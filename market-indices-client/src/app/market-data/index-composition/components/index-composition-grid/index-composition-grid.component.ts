import { Component, Input } from '@angular/core';
import { Indice } from 'src/app/market-data/models/indice.model';
import { IndexCompositionGridColumnsService } from './services/index-composition-grid-columns.service';
import { DecimalPipe } from '@angular/common';
import { IndiceChangePipe } from 'src/app/shared/pipes/indice-change.pipe';

@Component({
  selector: 'mi-index-composition-grid',
  templateUrl: './index-composition-grid.component.html',
  styleUrls: ['./index-composition-grid.component.scss'],
  providers: [IndexCompositionGridColumnsService, DecimalPipe, IndiceChangePipe]
})
export class IndexCompositionGridComponent {

  @Input() indice: Indice;

  columns: Array<any>;

  constructor(private indexCompositionGridColumnsService: IndexCompositionGridColumnsService) {
    this.columns = this.indexCompositionGridColumnsService.colunms;
  }

}
