import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Auth } from '../interfaces/auth.interfaces';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endPoint = environment.endPoint;
  private _auth!:Auth|undefined;

  constructor(private http: HttpClient) { }

  verificationAuthentication(): Observable<boolean>{
    if(!localStorage.getItem("token"))
      return of(false); // Metodo 1
    
    const url:string = `${this.endPoint}/usuarios/1`;
    return this.http.get<Auth>(url)
           .pipe( map( resp=>{ 
              this._auth = resp;
              return true; 
            }) ) // return of(true); // Metodo 2
    
    // of -> Crea observable en funcion a los argumentos que coloquemos  
  }

  login(){
    const url:string = `${this.endPoint}/usuarios/1`;
    return this.http.get<Auth>(url)
           .pipe(
             tap(resp=> this._auth = resp),
             tap(resp=> localStorage.setItem("token", resp.id))
            ); // Uso de pipe y tap, para obtener el resp antes de enviarlo a quien lo llama
  }

  get auth(){
    return { ...this._auth }; // Estructuro para que no se cambien por algun fallo
  }
}
