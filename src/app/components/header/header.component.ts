// src/app/header/header.component.ts

import { Component, inject, signal } from '@angular/core'; // <-- Importe 'signal'
import { Router, RouterLink, NavigationEnd } from '@angular/router'; // <-- Importe 'NavigationEnd'
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators'; // <-- Importe el operador 'filter'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private router = inject(Router);
  loggedInUsername = signal<string | null>(null);

  constructor() {
    this.checkLoginStatus();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkLoginStatus();
    });
  }

  checkLoginStatus() {
    const username = localStorage.getItem('username');
    if (username) {
      this.loggedInUsername.set(username);
    } else {
      this.loggedInUsername.set(null);
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username'); // <-- Elimine también el nombre de usuario
    this.router.navigate(['/login']);
    this.loggedInUsername.set(null); // Actualice la señal
  }
}