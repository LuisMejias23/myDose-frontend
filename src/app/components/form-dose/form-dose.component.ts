import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ResultModalComponent } from '../result-modal/result-modal.component';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-form-dose',
  standalone: true,
  imports: [ReactiveFormsModule, ResultModalComponent, CommonModule],
  templateUrl: './form-dose.component.html',
  styleUrl: './form-dose.component.scss',
})
export class FormDoseComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private dataService = inject(DataService);

  formDose!: FormGroup;

  symptomsList = signal<string[]>([]);
  recommendations = signal<any>(null);
  showModal = signal(false);
  shareUrl = signal<string | null>(null);

  // ESTADOS
  userEmail: string | null = null;
  emailStatusMessage: string | null = null;

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('userEmail');

    this.formDose = this.formBuilder.group({
      symptom: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(1)]],
      weight: [null, [Validators.required, Validators.min(1)]],
      temperature: [null],
    });

    this.loadSymptoms();
  }

  loadSymptoms(): void {
    this.dataService.getSymptoms().subscribe({
      next: (data) => {
        this.symptomsList.set(data);
      },
      error: (err) => {
        console.error('Failed to load symptoms:', err);
      },
    });
  }

  selectSymptom(symptom: string) {
    this.formDose.patchValue({ symptom: symptom });
  }

  resetForm() {
    this.formDose.reset();
    this.recommendations.set(null);
    this.emailStatusMessage = null;
  }

  onSubmit() {
    if (this.formDose.invalid) {
      alert('Por favor, complete todos los campos requeridos.');
      return;
    }

    this.emailStatusMessage = null;
    const formValue = this.formDose.value;

    // Construir los datos para el backend
    const dataToSend = {
      symptom: formValue.symptom as string,
      age: parseFloat(formValue.age as string),
      weight: parseFloat(formValue.weight as string),
      temperature: formValue.temperature
        ? parseFloat(formValue.temperature as string)
        : undefined,

      
      email: this.userEmail ?? undefined,

     
      sendEmail: false,
    };

    this.dataService.processConsultation(dataToSend).subscribe({
      next: (response) => {
        this.recommendations.set(response.aiResponse);
        this.showModal.set(true);

        // MANEJO DE ESTADO DE ENVÍO DE CORREO (Ahora que la bandera es obligatoria si hay email)
        if (dataToSend.sendEmail === true) {
          if (response.emailSent) {
            this.emailStatusMessage =
              '¡El análisis fue enviado a su correo electrónico!';
          } else {
            // Mensaje si el BACKEND falló al enviar (Ej: Nodemailer error)
            this.emailStatusMessage =
              'Error al enviar el correo. Por favor, inténtelo de nuevo más tarde.';
          }
        }

        // Llamar a saveConsultation
        const dataToSave = {
          ...dataToSend,
          aiResponse: response.aiResponse,
          email: dataToSend.email,
        };

        this.dataService.saveConsultation(dataToSave).subscribe({
          next: (shareResponse) => {
            const uniqueId = shareResponse.shareId;
            this.shareUrl.set(`http://localhost:4200/share/${uniqueId}`);
          },
          error: (shareError) => {
            console.error('API Error when saving consultation:', shareError);
            this.emailStatusMessage =
              this.emailStatusMessage ||
              'Consulta guardada, pero no se pudo generar el enlace para compartir.';
          },
        });
      },
      error: (error) => {
        console.error('API Error:', error);
        this.recommendations.set(null);
        alert('An error occurred. Please try again.');
      },
    });
  }

  closeModal() {
    this.showModal.set(false);
  }
}
