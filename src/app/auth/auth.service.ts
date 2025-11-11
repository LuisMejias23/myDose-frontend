// src/app/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { environment } from '../../env/environment.production';
import { environment } from '../../env/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.backendUrl}/auth`;

   /* URL PARA DESARROLLO - IMPORTAR ENV.DEVELOPER 
   private apiUrl = `${environment.backendUrl}/auth`; */

  constructor(private http: HttpClient) { }

  register(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, credentials);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  getLoggedInUser(): string | null {
    return localStorage.getItem('userEmail');
  }
}
