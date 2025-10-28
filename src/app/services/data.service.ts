import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultationData } from '../interfaces/consultation-data.interface';


interface FullConsultationData extends ConsultationData {
  aiResponse: string;
}

interface SharedConsultationData extends FullConsultationData {
  _id: string;
}

interface EmailData {
  subject: string;
  body: string;
  to: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

 private apiUrl = 'https://bandboxical-berneice-nonincarnated.ngrok-free.dev/api';

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

  getSharedConsultation(id: string): Observable<SharedConsultationData> {
    return this.http.get<SharedConsultationData>(`${this.apiUrl}/share/${id}`);
  }

  sendEmail(emailData: EmailData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/send-email`, emailData);
  }

  processConsultation(data: ConsultationData & { email?: string; sendEmail: boolean }): Observable<{ aiResponse: string; emailSent: boolean }> {
    return this.http.post<{ aiResponse: string; emailSent: boolean }>(
      `${this.apiUrl}/consultation`,
      data
    );
  }
}
