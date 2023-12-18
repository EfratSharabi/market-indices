import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { BaseUrlInterceptor } from './interceports/base-url.inteceptor';
import { TranslationModule } from './translation/translation.module';
import { OopsPageComponent } from './components/oops-page/oops-page.component';

@NgModule({
    declarations: [
        OopsPageComponent
    ],
    imports: [
        TranslationModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BaseUrlInterceptor,
            multi: true
        },
        {
            provide: 'BASE_API_URL', useValue: environment.apiUrl
        }
    ],
    exports: [
        OopsPageComponent
    ]
})
export class CoreModule { }
