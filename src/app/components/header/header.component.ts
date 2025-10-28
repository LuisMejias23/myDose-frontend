// src/app/header/header.component.ts

import { Component, inject, signal } from '@angular/core'; // <-- Importe 'signal'
import { Router, RouterLink, NavigationEnd } from '@angular/router'; // <-- Importe 'NavigationEnd'

import { filter } from 'rxjs/operators'; // <-- Importe el operador 'filter'
import { NotificacionesService } from '../../services/notificaciones.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private router = inject(Router);
  loggedInUsername = signal<string | null>(null);
  private notificacionesService = inject(NotificacionesService);

  constructor() {
    console.log('HeaderComponent se ha cargado.');
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

  requestNotif(): void {
    console.log('Intentando solicitar suscripción...');
    this.notificacionesService.requestSubscription();
  }
}