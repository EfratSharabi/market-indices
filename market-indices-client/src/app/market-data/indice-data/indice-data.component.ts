import { Component, Input } from '@angular/core';
import { Indice } from '../models/indice.model';

@Component({
  selector: 'mi-indice-data',
  templateUrl: './indice-data.component.html',
  styleUrls: ['./indice-data.component.scss']
})
export class IndiceDataComponent {

  @Input() indice: Indice = {} as Indice;

}
