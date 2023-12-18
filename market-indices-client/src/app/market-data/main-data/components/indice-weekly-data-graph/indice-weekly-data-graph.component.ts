import { Component, Input, OnInit } from '@angular/core';
import { Indice } from '../../../models/indice.model';

@Component({
  selector: 'mi-indice-weekly-data-graph',
  templateUrl: './indice-weekly-data-graph.component.html',
  styleUrls: ['./indice-weekly-data-graph.component.scss']
})
export class IndiceWeeklyDataGraphComponent implements OnInit {

  @Input() indice: Indice = {} as Indice;

  dataset = {} as any;
  view = [600, 300] as [number, number];

  ngOnInit(): void {
    const data = this.indice.chartData.map(item => {
      return { name: item.date, value: item.rate }
    });
    this.dataset = [{ name: this.indice.name, series: data }];
  }

}
