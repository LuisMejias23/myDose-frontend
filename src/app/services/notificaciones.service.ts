import { Injectable, inject } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.production';
import { Observable } from 'rxjs';

interface PushPayload {
  notification: {
    title: string;
    body: string;
    [key: string]: any;
  };
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class NotificacionesService {
 
  private readonly BACKEND_URL = `${environment.backendUrl}/notifications/save-subscription`;

  private swPush = inject(SwPush);
  private http = inject(HttpClient);

  constructor() {
    console.log('Servicio de Notificaciones Inicializado');
    console.log('SwPush está habilitado?', this.swPush.isEnabled);
    this.listenForMessages();
  }

  /**
   * Pide permiso para notificaciones y registra el token de suscripción
   */
  requestSubscription(): void {
    console.log('SwPush está habilitado?', this.swPush.isEnabled);
    if (!this.swPush.isEnabled) {
      console.warn(
        'Las notificaciones Push no están habilitadas en este navegador o entorno.'
      );
      return;
    }

    // PRUEBA: Solo generar la suscripción y mostrarla en consola
    this.swPush
      .requestSubscription({ serverPublicKey: environment.vapidKey })
      .then((sub: PushSubscription) => {
        // 1. Log de ÉXITO
        console.log('Subscripción generada', sub);

        // 2. ¡LLAMADA CRÍTICA!
        // Usamos 'this' porque sendSubscriptionToBackend es un método privado de la clase.
        this.sendSubscriptionToBackend(sub);

        console.log('Intentando enviar subscripción al backend...'); // Nuevo log de confirmación
      })
      .catch((err) => console.error('Error al subscribirse', err));
  }

  /**
   * Envía la suscripción al servidor Express para que guarde el token
   * @param subscription Objeto de suscripción de Service Worker
   */
  private sendSubscriptionToBackend(subscription: PushSubscription): void {
    this.http.post(this.BACKEND_URL, subscription).subscribe({
      next: (res) =>
        console.log('Suscripción enviada al backend con éxito:', res),
      error: (err) =>
        console.error('Error al enviar la suscripción al backend:', err),
    });
  }

  // Opcional: Manejar la recepción de mensajes en primer plano (foreground)
  // En tu listenForMessages() en NotificacionesService.ts

  listenForMessages(): void {
    this.swPush.messages.subscribe((payload: any) => {
      console.log('🎉 [HANDLER] Notificación Push Recibida:', payload);

      // 🛑 SOLUCIÓN FINAL: Usar el operador de encadenamiento opcional (?.)
      // Esto asegura que si 'payload' es undefined, JavaScript no arroje un error.
      // NOTA: Revertimos a la notación de punto para simplicidad.
      const title = payload?.title || 'Sin título'; 
      const body = payload?.body || 'Sin cuerpo';   

      alert(`¡Mensaje Recibido! Título: ${title} - Cuerpo: ${body}`);
    });
  }
}
