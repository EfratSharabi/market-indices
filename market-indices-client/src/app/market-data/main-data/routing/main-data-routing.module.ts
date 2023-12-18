import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainDataComponent } from '../main-data.component';

export const mainDataRoutes = [
    {
        path: '',
        component: MainDataComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(mainDataRoutes)],
    exports: [RouterModule]
})
export class MainDataRoutingModule { }