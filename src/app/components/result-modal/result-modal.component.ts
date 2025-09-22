import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-modal',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './result-modal.component.html',
  styleUrl: './result-modal.component.scss'
})
export class ResultModalComponent {
  recommendations = input<any>(null);
  onClose = output<void>(); // Evento para cerrar el modal
  shareUrl = input<string | null>(null);

  closeModal() {
    this.onClose.emit();
  }

  shareOnWhatsApp() {
    const message = `Check out my medical recommendation: ${this.shareUrl()}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
  }

  shareOnEmail() {
    const subject = 'Medical Recommendation';
    const body = `Hello, here is a medical recommendation for you: ${this.shareUrl()}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  copyToClipboard() {
    if (this.shareUrl()) {
      navigator.clipboard.writeText(this.shareUrl() || '')
        .then(() => alert('Link copied to clipboard!'))
        .catch(err => console.error('Could not copy text: ', err));
    }
  }
}
