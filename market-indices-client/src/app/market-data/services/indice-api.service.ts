import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Indice } from '../models/indice.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IndiceApiService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Indice>> {
    return this.http.get<Array<Indice>>('indices/all');
  }
}
