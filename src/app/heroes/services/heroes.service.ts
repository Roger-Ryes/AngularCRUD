import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root' // No se lo declara en ningun modulo, por la propiedad providedIn
})
export class HeroesService {

  private endPoint = environment.endPoint;

  constructor( private http: HttpClient ) {

  }

  getHeroes(): Observable<Heroe[]>{ //Para detallar mas
    const url: string = `${this.endPoint}/heroes`;
    return this.http.get<Heroe[]>(url);
  }
  
  getHeroeById( id:string ): Observable<Heroe>{
    const url: string = `${this.endPoint}/heroes/${id}`;
    return this.http.get<Heroe>( url );
  }
  
  getSuggestion( termino:string ): Observable<Heroe[]>{
    const url: string = `${this.endPoint}/heroes?q=${termino}&_limit=6`;
    return this.http.get<Heroe[]>( url );
  }
    
  addHeroe( heroe:Heroe ): Observable<Heroe>{
    const url: string = `${this.endPoint}/heroes`;
    return this.http.post<Heroe>( url, heroe); 
  }
}
