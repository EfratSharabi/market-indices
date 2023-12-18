import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from './guards/language.guard';
import { supportedLangs } from '../core/translation/enums/supported-langs.enum';
import { OopsPageComponent } from '../core/components/oops-page/oops-page.component';

const routes: Routes = [
  {
    path: ':lang',
    canActivate: [LanguageGuard],
    children: [
      {
        path: 'market-data',
        loadChildren: () => import('../market-data/market-data.module').then(m => m.MarketDataModule)
      },
      {
        path: 'page-not-found',
        component: OopsPageComponent
      },
      {
        path: '',
        redirectTo: 'market-data',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: supportedLangs.HE,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {})
  ],
  providers:[
    LanguageGuard
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
