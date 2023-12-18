import { Component, Input, OnInit } from '@angular/core';
import { IndexComposition, Indice } from 'src/app/market-data/models/indice.model';

@Component({
  selector: 'mi-indice-prominent-flucts',
  templateUrl: './indice-prominent-flucts.component.html',
  styleUrls: ['./indice-prominent-flucts.component.scss']
})
export class IndiceProminentFluctsComponent implements OnInit {

  @Input() indice: Indice = {} as Indice;

  mostActiveSecurity = {} as any;
  topGainerSecurity = {} as any;
  topDeclinerSecurity = {} as any;

  ngOnInit(): void {
    this.mostActiveSecurity = this.getMostActiveSecurity();
    this.topGainerSecurity = this.getTopGainerSecurity();
    this.topDeclinerSecurity = this.getTopDeclinerSecurity();
  }

  private getMostActiveSecurity(): IndexComposition {
    //check case of one item
    return this.indice.indexComposition.reduce(function (prev, current) {
      return (prev && prev.turnOver > current.turnOver) ? prev : current
    })
  }

  private getTopGainerSecurity(): IndexComposition {
    return this.indice.indexComposition.reduce(function (prev, current) {
      return (prev && prev.change > current.change) ? prev : current
    });
  }

  private getTopDeclinerSecurity(): IndexComposition {
    return this.indice.indexComposition.reduce(function (prev, current) {
      return (prev && prev.change < current.change) ? prev : current
    });
  }
}
