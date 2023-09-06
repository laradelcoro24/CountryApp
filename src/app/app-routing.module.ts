import { NgModule } from '@angular/core';
import { Routes ,RouterModule} from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPagesComponent } from './shared/pages/about-pages/about-pages.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes =[
  // {
  //   path:'',
  //   component: HomePageComponent
  // },
  {
    path:'about',
    component: AboutPagesComponent
  },
  {
    path:'contact',
    component: ContactPageComponent
  },
  {
    path:'countries',
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
     path: '**',
     redirectTo: 'countries/by-capital'

  }
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
