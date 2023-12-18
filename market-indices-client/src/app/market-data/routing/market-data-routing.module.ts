import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketDataComponent } from '../market-data.component';
import { IndiceGuard } from './guards/indice.guard';
import { IndiceResolver } from './resolvers/indice.resolver';

const routes: Routes = [
    {
        path: '',
        component: MarketDataComponent,
        children: [
            {
                path: ':indiceId',
                canActivate: [IndiceGuard],
                resolve: {
                    indice: IndiceResolver
                },
                children: [
                    {
                        path: 'main-data',
                        loadChildren: () => import('../main-data/main-data.module').then(m => m.MainDataModule)
                    },
                    {
                        path: 'index-composition',
                        loadChildren: () => import('../index-composition/index-composition.module').then(m => m.IndexCompositionModule)
                    },
                    {
                        path: '',
                        redirectTo: 'main-data',
                        pathMatch: 'full'
                    }
                ]
            }
        ]
    }

];



@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [
        IndiceGuard,
        IndiceResolver
    ],
    exports: [
        RouterModule
    ]
})
export class MarketDataRoutingModule { }
