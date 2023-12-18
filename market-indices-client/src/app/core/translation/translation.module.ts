import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from './services/translation.service';


@NgModule({
    imports:[
        TranslateModule
    ],
    providers:[
        TranslationService
    ],
    exports:[
        TranslateModule
    ]
})
export class TranslationModule { }
