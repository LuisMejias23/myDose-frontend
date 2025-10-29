// src/app/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://bandboxical-berneice-nonincarnated.ngrok-free.dev/api/auth';

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
