import { Component, OnDestroy, OnInit } from '@angular/core';
import { Indice } from '../models/indice.model';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'mi-index-composition',
  templateUrl: './index-composition.component.html',
  styleUrls: ['./index-composition.component.scss']
})
export class IndexCompositionComponent implements OnInit, OnDestroy {

  indice: Indice = {} as Indice;
  private _destroyed$ = new Subject<void>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this._destroyed$)).subscribe(data => {
      this.indice = data['indice'];
    })
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
