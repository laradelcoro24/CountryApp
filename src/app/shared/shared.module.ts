import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';


@NgModule({
  declarations: [
    HomePageComponent,
    AboutPagesComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoaderSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AboutPagesComponent,
    ContactPageComponent,
    HomePageComponent,
    LoaderSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,


  ]
})
export class SharedModule { }
