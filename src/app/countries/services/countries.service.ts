import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap} from 'rxjs';
import { Country } from '../interfaces/country.interfaces';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';
import { SearchBoxComponent } from '../../shared/components/search-box/search-box.component';



@Injectable({providedIn: 'root'})
export class CountiesService {

  private apiUrl:string="https://restcountries.com/v3.1";

  public cacheStore: CacheStore={

    byCapital:{term:'',countries:[]},
    byCountries:{term:'',countries:[]},
    byRegion:{ region:'',countries:[]},
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
   }

  private saveTolocalStorage(){

    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore))

  }
  private loadFromLocalStorage(){
    if(!localStorage.getItem('cacheStore')) return;

    this.cacheStore= JSON.parse(localStorage.getItem ('cacheStore')!);
  }

  private getCountriesRequest(url:string): Observable<Country[]>{
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of([]) ),

      );

  }
  searchCountryByAlphaCode(code :string): Observable<Country | null>{

    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${ code }`)
    .pipe(
      map(countries => countries.length > 0 ? countries[0]:null),
      catchError(error => of(null) )
      );

  }


  searchCapital(term:string): Observable<Country[]>{

    const url= `${this.apiUrl}/capital/${ term }`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries=> this.cacheStore.byCapital={term,countries}),
      tap( ()=> this.saveTolocalStorage()),
    );
  }

  searchCountry(term:string): Observable<Country[]>{

    const url= `${this.apiUrl}/name/${ term }`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries=> this.cacheStore.byCountries={term,countries}),
      tap( ()=> this.saveTolocalStorage()),

    );

  }
  searchRegion(region:Region): Observable<Country[]>{

    const url= `${this.apiUrl}/region/${ region }`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries=> this.cacheStore.byRegion={region,countries}),
      tap( ()=> this.saveTolocalStorage()),
    );

  }

}
