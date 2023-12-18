import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Indice } from '../models/indice.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'mi-main-data',
  templateUrl: './main-data.component.html',
  styleUrls: ['./main-data.component.scss']
})
export class MainDataComponent implements OnInit, OnDestroy {

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
