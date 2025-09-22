import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-data-dose',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-dose.component.html',
  styleUrl: './data-dose.component.scss'
})
export class DataDoseComponent {
recommendations = input<any>(null)
}
