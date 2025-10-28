import { Component, input } from '@angular/core';


@Component({
  selector: 'app-data-dose',
  standalone: true,
  imports: [],
  templateUrl: './data-dose.component.html',
  styleUrl: './data-dose.component.scss'
})
export class DataDoseComponent {
recommendations = input<any>(null)
}
