import { NgModule } from '@angular/core';
import { IndiceChangePipe } from './indice-change.pipe';

@NgModule({
    declarations: [
        IndiceChangePipe
    ],
    exports: [
        IndiceChangePipe
    ]
})
export class PipesModule { }
