import { Component, inject, input, output } from '@angular/core';

import { DataService } from '../../services/data.service';

interface ContentEmailData {
  recommendationText: string;
  to: string;
}

@Component({
  selector: 'app-result-modal',
  standalone: true,
  imports: [],
  templateUrl: './result-modal.component.html',
  styleUrl: './result-modal.component.scss',
})
export class ResultModalComponent {
  private dataService = inject(DataService);

  recommendations = input<string | null>(null);
  onClose = output<void>(); 
  shareUrl = input<string | null>(null);
  userEmail: string | null = localStorage.getItem('userEmail');

  closeModal() {
    this.onClose.emit();
  }

  shareOnWhatsApp() {
    const message = `Échale un vistazo a mi recomendación médica: ${this.shareUrl()}`;
    const encodedMessage = encodeURIComponent(message);

    const uriScheme = `whatsapp://send?text=${encodedMessage}`;

    window.open(uriScheme, '_blank');
  }

  shareOnEmail() {
    if (!this.userEmail || !this.recommendations()) {
      console.error('No se puede compartir: URL no disponible.');
      return;
    }

    if (!this.userEmail) {
      console.error(
        'Error: No se encontró la dirección de correo electrónico del usuario.'
      );
      return;
    }

    const contentEmailData: ContentEmailData = {
      recommendationText: this.recommendations() as string,
      to: this.userEmail,
    };

    this.dataService
      .sendRecommendationContentEmail(contentEmailData)
      .subscribe({
        next: () => alert('Email sent successfully!'),
        error: (err) => {
          console.error('Failed to send email:', err);
          alert('An error occurred while sending the email.');
        },
      });
  }

 /*  copyToClipboard() {
    if (this.shareUrl()) {
      navigator.clipboard
        .writeText(this.shareUrl() || '')
        .then(() => alert('Link copied to clipboard!'))
        .catch((err) => console.error('Could not copy text: ', err));
    }
  } */
}
