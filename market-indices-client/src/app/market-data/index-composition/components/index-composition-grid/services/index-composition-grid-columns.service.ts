import { DecimalPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { IndiceChangePipe } from 'src/app/shared/pipes/indice-change.pipe';

@Injectable()
export class IndexCompositionGridColumnsService {

  constructor(private decimalPipe: DecimalPipe,
              private indiceChangePipe: IndiceChangePipe) { }

  get colunms(): Array<any> {
    return [
      {
        name: 'name',
        alias: 'index-composition.columns.name',
      },
      {
        name: 'id',
        alias: 'index-composition.columns.id',
      },
      {
        name: 'weight',
        alias: 'index-composition.columns.weight',
      },
      {
        name: 'marketCap',
        alias: 'index-composition.columns.marketCap',
        transform: (value: number) => this.decimalPipe.transform(value)
      },
      {
        name: 'turnOver',
        alias: 'index-composition.columns.turnOver',
        transform: (value: number) => this.decimalPipe.transform(value)
      },
      {
        name: 'change',
        alias: 'index-composition.columns.change',
        transform: (value: number) => this.indiceChangePipe.transform(value),
        class: 'ltr'
      },
      {
        name: 'rate',
        alias: 'index-composition.columns.rate',
        transform: (value: number) => this.decimalPipe.transform(value)
      }
    ];
  }

}
