import { Component } from '@angular/core';
import { Indice } from './models/indice.model';
import { IndicesService } from './services/indices.service';

@Component({
  selector: 'mi-market-data',
  templateUrl: './market-data.component.html',
  styleUrls: ['./market-data.component.scss']
})
export class MarketDataComponent {

  indices: Array<Indice> = [];

  constructor(private indicesService: IndicesService) { }

  ngOnInit(): void {
    this.indicesService.getAll().subscribe((response: Array<Indice>) => {
      this.indices = response;
    });
  }
}
