import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ResultModalComponent } from '../result-modal/result-modal.component';

@Component({
  selector: 'app-form-dose',
  standalone: true,
  imports: [ReactiveFormsModule, ResultModalComponent, CommonModule],
  templateUrl: './form-dose.component.html',
  styleUrl: './form-dose.component.scss',
})
export class FormDoseComponent {
  private formBuilder = inject(FormBuilder);
  private dataService = inject(DataService);
  symptomsList = signal<string[]>([]);

  recommendations = signal<any>(null);
  showModal = signal(false);
  shareUrl = signal<string | null>(null);

  formDose = this.formBuilder.group({
    symptom: ['', Validators.required],
    age: ['', Validators.required],
    weight: ['', Validators.required],
    temperature: [''],
  });

   ngOnInit(): void {
    this.dataService.getSymptoms().subscribe({
      next: (data) => {
        this.symptomsList.set(data);
      },
      error: (err) => {
        console.error('Failed to load symptoms:', err);
      }
    });
  }

  // Nuevo método para seleccionar un síntoma
  selectSymptom(symptom: string) {
    this.formDose.patchValue({ symptom: symptom });
  }

  resetForm() {
    this.formDose.reset();
    this.recommendations.set(null);

  }

  

  onSubmit() {
    if (this.formDose.valid) {
      const formValue = this.formDose.value;

      const dataToSend = {
        symptom: formValue.symptom as string,
        age: parseFloat(formValue.age as string),
        weight: parseFloat(formValue.weight as string),
        temperature: formValue.temperature
          ? parseFloat(formValue.temperature as string)
          : undefined,
      };

      this.dataService.getMedicationRecommendation(dataToSend).subscribe({
        next: (response) => {
          
          this.recommendations.set(response.recommendations);

         
          this.dataService
            .saveConsultation(dataToSend, response.recommendations)
            .subscribe({
              next: (shareResponse) => {
                const uniqueId = shareResponse.shareId;
                this.shareUrl.set(`http://localhost:4200/share/${uniqueId}`);
                this.showModal.set(true); // Mostrar el modal
              },
              error: (shareError) => {
                console.error(
                  'API Error when saving consultation:',
                  shareError
                );
                alert('An error occurred while saving the consultation.');
                this.showModal.set(true); // Mostrar el modal aunque el guardado falle
              },
            });
        },
        error: (error) => {
          console.error('API Error:', error);
          this.recommendations.set(null);
          alert('An error occurred. Please try again.');
        },
      });
    } else {
      alert('Please fill out the required fields.');
    }
  }
  closeModal() {
    this.showModal.set(false);
  }
}
