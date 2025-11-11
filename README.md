💊 MyDose: Asistente de Recomendación Médica Inteligente (Angular & Gemini API)

🌟 Descripción del Proyecto

MyDose es una aplicación web moderna diseñada para simular un asistente de salud inteligente. Utiliza la potencia del modelo Gemini de Google para analizar síntomas o consultas médicas y generar recomendaciones o análisis informativos en tiempo real, ofreciendo una experiencia de usuario rápida y fluida.

Este proyecto es una aplicación Full Stack con una arquitectura desacoplada, demostrando competencia en el manejo de múltiples servicios de nube: el Frontend es una aplicación Angular desplegada en Vercel, y el Backend (API RESTful) está alojado en Render.

🛑 ADVERTENCIA DE ACCESO (Modo Gratuito)

Debido a que el Backend y la Base de Datos están operando bajo planes gratuitos para el portafolio, existe una restricción de acceso para evitar exceder las cuotas de uso y mantener el servicio en línea.

PARA REALIZAR PRUEBAS DE INICIO DE SESIÓN, REGISTRO Y FUNCIONALIDAD COMPLETA, DEBE UTILIZAR EXCLUSIVAMENTE EL SIGUIENTE CORREO ELECTRÓNICO:

luismejias.vnzl@gmail.com

Cualquier intento de registro con un correo diferente puede fallar o llevar a un bloqueo temporal del servicio.

🚀 Arquitectura y Tecnologías

El proyecto se basa en una arquitectura moderna y desacoplada:

Área

Tecnología Principal

Despliegue/Servicio

Propósito

Frontend

Angular + TypeScript

Vercel

Interfaz de usuario dinámica y completamente responsiva (Tailwind CSS).

Backend (API)

Node.js (Express)

Render

Servidor de lógica de negocio y proxy para la IA.

Inteligencia Artificial

Gemini API

(Consumo desde el Backend)

Generación del análisis médico y las recomendaciones.

Compartir Contenido

Enlaces URI/Mailto

(Cliente Angular)

Integración directa para compartir resultados por WhatsApp y Email.

🛠️ Stack Tecnológico Completo

Una lista detallada de las herramientas utilizadas para construir MyDose:

Frontend (Angular)

Framework: Angular (v17+) y TypeScript

Estilos: Tailwind CSS para un diseño rápido, modular y responsivo.

Iconografía: Lucide Icons para la interfaz de usuario.

Despliegue: Vercel

Backend (API RESTful)

Lenguaje/Entorno: Node.js

Framework: Express.js para la creación de endpoints REST.

Base de Datos (Principal): MongoDB para el almacenamiento principal de consultas y datos de la aplicación.

Base de Datos (Autenticación): Firestore (Firebase) para la gestión de usuarios y tokens de sesión.

Autenticación: Firebase Auth (gestión de usuarios y tokens de sesión).

Servicio de IA: Gemini API (Google) para la generación de contenido médico.

Servicio de Email: Resend (asumiendo) para el envío de notificaciones y enlaces.

Despliegue: Render

✨ Características Destacadas

Análisis Inteligente en Tiempo Real: Interacción con la Gemini API para la generación de recomendaciones.

Experiencia de Usuario: Diseño limpio y responsivo, garantizando usabilidad en todos los dispositivos.

Integración Social Optimizada: Botones funcionales para compartir el análisis por WhatsApp (esquema URI optimizado para móvil) y correo electrónico.

Demostración de Arquitectura Nube: Uso de Vercel y Render para un CI/CD y hosting de servicios Full Stack.

⚙️ Configuración del Entorno

Para ejecutar este proyecto localmente, consulta las variables de entorno en:

src/env/environment.ts: Variables de Producción (usadas en el build de Vercel).

src/env/environment.development.ts: Variables de Desarrollo (usadas al ejecutar ng serve).

Pasos Rápidos para Ejecución Local

Clonar Repositorio: git clone https://www.youtube.com/watch?v=eQMcIGVc8N0

Instalar Dependencias: npm install

Ejecutar Servidor: ng serve

La aplicación estará disponible en http://localhost:4200/.

🌐 Despliegue Continuo (CI/CD)

El proyecto demuestra un flujo de trabajo de despliegue automatizado:

1. Frontend: Angular en Vercel

Proceso: El repositorio está conectado a Vercel. Cada git push a la rama principal (ej. main) inicia automáticamente el build de Producción.

Beneficio: Garantiza que la última versión del código Frontend esté siempre en línea en minutos.

URL de Producción: https://my-dose-frontend.vercel.app (Ejemplo).

2. Backend: API RESTful en Render

Proceso: Render aloja el servidor de la API, manteniéndolo en línea para que el Frontend lo consuma.

Beneficio: Separa la lógica del negocio del cliente, permitiendo escalabilidad y demostrando un diseño de microservicios.

URL de Producción: https://mydose-api.onrender.com/api (Ejemplo).

🤝 Contacto

Luis Mejias

luismejias.vnzl@gmail.com

Whatsapp:

+58 412-3093419

Tu Enlace a  Portfolio :

https://github.com/LuisMejias23/myDose-frontend.git
