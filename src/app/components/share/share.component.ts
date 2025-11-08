import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';


interface FullConsultationData {
  symptom: string;
  age: number;
  weight: number;
  temperature?: number;
  aiResponse: string;
}

@Component({
  selector: 'app-share',
  standalone: true,
  imports: [],
  templateUrl: './share.component.html',
  styleUrl: './share.component.scss'
})
export class ShareComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private dataService = inject(DataService);

  consultation = signal<FullConsultationData | null>(null);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getConsultation(id);
    } else {
      this.loading.set(false);
      this.error.set('No se encontró el ID de la consulta.');
    }
  }

  getConsultation(id: string): void {
    this.dataService.getSharedConsultation(id).subscribe({
      next: (data) => {
        this.consultation.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error al obtener la consulta compartida:', err);
        this.loading.set(false);
        this.error.set('Fallo al cargar la consulta. El enlace podría ser inválido.');
      }
    });
  }

}