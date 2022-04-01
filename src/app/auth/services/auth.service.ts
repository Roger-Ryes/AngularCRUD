import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endPoint = environment.endPoint;

  constructor(private http: HttpClient) { }

  login(){
    const url:string = `${this.endPoint}/usuarios/12`;
    return this.http.get<Auth>(url);
  }
}
