import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Indice } from '../../models/indice.model';
import { IndicesService } from '../../services/indices.service';


@Injectable()
export class IndiceResolver implements Resolve<Indice> {

  constructor(private indicesService: IndicesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Indice> {
    const id = route.paramMap.get('indiceId') as string;
    return this.indicesService.get(id);
  }

}
