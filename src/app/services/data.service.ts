import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultationData } from '../interfaces/consultation-data.interface';


interface FullConsultationData extends ConsultationData {
  aiResponse: string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

 private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getConsultationResponse(data: ConsultationData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/consultation`, data);
  }
  
  saveConsultation(data:FullConsultationData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/share`, data);
  }

  getSymptoms(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/symptoms`);
  }

  
}
