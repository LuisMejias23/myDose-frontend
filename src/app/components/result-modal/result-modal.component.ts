import { Component, inject, input, output } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-result-modal',
  standalone: true,
  imports: [],
  templateUrl: './result-modal.component.html',
  styleUrl: './result-modal.component.scss'
})
export class ResultModalComponent {
  private dataService = inject(DataService);

  recommendations = input<any>(null);
  onClose = output<void>(); // Evento para cerrar el modal
  shareUrl = input<string | null>(null);
  userEmail: string | null = localStorage.getItem('userEmail');

  closeModal() {
    this.onClose.emit();
  }

  shareOnWhatsApp() {
    const message = `Check out my medical recommendation: ${this.shareUrl()}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
  }

  shareOnEmail() {
    if (this.shareUrl()) {
      const emailData = {
        subject: 'Medical Recommendation',
        body: `Hello, here is a medical recommendation for you: ${this.shareUrl()}`,
        to: 'recipient@example.com', // Aquí se debe reemplazar con el destinatario real
      };

      this.dataService.sendEmail(emailData).subscribe({
        next: () => alert('Email sent successfully!'),
        error: (err) => {
          console.error('Failed to send email:', err);
          alert('An error occurred while sending the email.');
        },
      });
    }
  }

  copyToClipboard() {
    if (this.shareUrl()) {
      navigator.clipboard.writeText(this.shareUrl() || '')
        .then(() => alert('Link copied to clipboard!'))
        .catch(err => console.error('Could not copy text: ', err));
    }
  }
}
