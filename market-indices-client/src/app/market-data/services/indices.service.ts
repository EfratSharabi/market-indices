import { Injectable } from '@angular/core';
import { IndiceApiService } from './indice-api.service';
import { Indice } from '../models/indice.model';
import { Observable, map, of, tap } from 'rxjs';

@Injectable()
export class IndicesService {

  indices: Array<Indice> = [];

  constructor(private indiceApiService: IndiceApiService) { }

  getAll(): Observable<Array<Indice>> {
    if(this.indices.length) {
      return of(this.indices);
    }
    return this.indiceApiService.getAll().pipe(tap((response: Array<Indice>) => {
      this.indices = response;
    }))
  }

  get(id: string): Observable<Indice> {
    return this.getAll().pipe(map(resp=>{
      return resp.find(indice => indice.id.toString() === id) as Indice;
    }))
  }

}
