import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { supportedLangs } from 'src/app/core/translation/enums/supported-langs.enum';
import { TranslationService } from 'src/app/core/translation/services/translation.service';
import { IndiceResolver } from '../resolvers/indice.resolver';
import { Observable, map } from 'rxjs';
import { Indice } from '../../models/indice.model';



@Injectable()
export class IndiceGuard implements CanActivate {

    constructor(private router: Router,
                private indiceResolver: IndiceResolver) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this.indiceResolver.resolve(route, state).pipe(map((indice: Indice) => {
            if (indice) {
                return true;
            }
            const lang = route.parent?.params['lang'];
            this.router.navigate([`/${lang}/page-not-found`]);
            return false;
        }));
    }
}
