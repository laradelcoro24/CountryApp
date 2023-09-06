import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountiesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';




@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{

  public countries: Country[]= [];
  public isLoading:boolean=false;
  public regions: Region[]=['Americas','Asia','Europe','Africa','Oceania'];
  public selectedRegion?: Region;

  constructor(private countriesService:CountiesService ){}

  ngOnInit(): void {
      this.countries= this.countriesService.cacheStore.byRegion.countries;
      this.selectedRegion= this.countriesService.cacheStore.byRegion.region;

  }



searchByRegion(region:Region):void{

  this.isLoading=true;
  this.selectedRegion= region;

  this.countriesService.searchRegion(region).subscribe(
    countries =>{
    this.countries= countries
    this.isLoading=false;}
  );
}

}
