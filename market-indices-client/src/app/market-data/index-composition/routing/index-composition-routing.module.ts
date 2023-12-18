import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexCompositionComponent } from '../index-composition.component';

export const indexCompositionRoutes = [
    {
        path: '',
        component: IndexCompositionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(indexCompositionRoutes)],
    exports: [RouterModule]
})
export class IndexCompositionRoutingModule { }
