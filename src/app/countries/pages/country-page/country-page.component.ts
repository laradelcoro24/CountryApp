import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountiesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{


  public country?: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountiesService,
    ) {  }


  ngOnInit(): void {
      this.activatedRoute.params
      .pipe(
        switchMap (({id}) => this.countriesService.searchCountryByAlphaCode(id)),
      )
      .subscribe( country => {

        if(!country){
          return this.router.navigateByUrl('');
        }

        this.country= country;
        return;

        });
  }

}
