import { Component, OnInit } from '@angular/core';
import { CountiesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[]= [];
  public initialValue:string='';
  public isLoading:boolean=false;

  constructor(private countriesService:CountiesService ){  }

  ngOnInit(): void {
    this.countries= this.countriesService.cacheStore.byCapital.countries;
    this.initialValue=this.countriesService.cacheStore.byCapital.term
}


searchByCapital(termino:string):void{
  this.isLoading=true;

  this.countriesService.searchCapital(termino).subscribe(
    countries =>{
    this.countries= countries;
    this.isLoading=false;}
  );
}
}
