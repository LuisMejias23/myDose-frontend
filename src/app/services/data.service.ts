import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultationData } from '../interfaces/consultation-data.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {

 private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getMedicationRecommendation(data: ConsultationData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/consultation`, data);
  }
  
  saveConsultation(data: ConsultationData, recommendations: any): Observable<any> {
    const dataToSave = { ...data, recommendations };
    return this.http.post<any>(`${this.apiUrl}/share`, dataToSave);
  }

  getSymptoms(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/symptoms`);
  }

  
}
