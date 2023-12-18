import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { supportedLangs } from 'src/app/core/translation/enums/supported-langs.enum';
import { TranslationService } from 'src/app/core/translation/services/translation.service';

@Injectable()
export class LanguageGuard implements CanActivate {

    constructor(private router: Router,
                private translateService: TranslationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        let lang = route.paramMap.get('lang') as supportedLangs
        if (!Object.values(supportedLangs).includes(lang)) {
           return this.router.createUrlTree([supportedLangs.EN])
        }
        this.translateService.setLangage(lang)
        return true;
    }
}
