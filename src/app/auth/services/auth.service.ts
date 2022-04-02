import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Auth } from '../interfaces/auth.interfaces';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endPoint = environment.endPoint;
  private _auth!:Auth|undefined;

  constructor(private http: HttpClient) { }

  login(){
    const url:string = `${this.endPoint}/usuarios/1`;
    return this.http.get<Auth>(url)
           .pipe(
             tap(resp=> this._auth = resp)
            ); // Uso de pipe y tap, para obtener el resp antes de enviarlo a quien lo llama
  }

  get auth(){
    return { ...this._auth }; // Estructuro para que no se cambien por algun fallo
  }
}
