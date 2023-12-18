import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { supportedLangs } from '../enums/supported-langs.enum';

@Injectable()
export class TranslationService {

  constructor(@Inject(DOCUMENT) private document: Document,
              private translateService: TranslateService) { }

  setLangage(lang: supportedLangs): void {
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.setDirection(lang)
  }

  private setDirection(lang: supportedLangs): void {
    const direction = lang == 'en' ? 'ltr' : 'rtl'
    const htmlTag = this.document.querySelector('html') as HTMLHtmlElement;
    htmlTag.dir = direction;
  }
}
