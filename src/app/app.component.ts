import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NotificacionesService } from './services/notificaciones.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'My-Dose';

  private notificacionesService = inject(NotificacionesService); // Inyectar

  ngOnInit(): void {
    // Escuchar mensajes en primer plano (si lo necesitas)
    this.notificacionesService.listenForMessages(); 
    
    // Opcional: Puedes solicitar la suscripción aquí o en un botón
    // this.notificacionesService.requestSubscription();
  }

  requestNotif(): void {
    this.notificacionesService.requestSubscription();
  }
}
