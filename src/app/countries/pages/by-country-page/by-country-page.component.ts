import { Component, OnInit } from '@angular/core';
import { CountiesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[]= [];
  public initialValue:string='';
  public isLoading:boolean=false;
  constructor(private countriesService:CountiesService ){
 }
 ngOnInit(): void {
     this.countries= this.countriesService.cacheStore.byCountries.countries;
     this.initialValue= this.countriesService.cacheStore.byCountries.term;
 }

  searchByCountry(termino:string):void{
    this.isLoading=true;
    this.countriesService.searchCountry(termino).subscribe(
      countries =>{
      this.countries= countries
      this.isLoading=false;}
    );
  }

}
