💊 MyDose: Asistente de Recomendación Médica Inteligente (Angular & Gemini API)

🌟 Descripción del Proyecto

MyDose es una aplicación web moderna diseñada para simular un asistente de salud inteligente. Utiliza la potencia del modelo Gemini de Google para analizar síntomas o consultas médicas y generar recomendaciones o análisis informativos en tiempo real, ofreciendo una experiencia de usuario rápida y fluida.

Este proyecto es una aplicación Full Stack con una arquitectura desacoplada, demostrando competencia en el manejo de múltiples servicios de nube: el Frontend es una aplicación Angular desplegada en Vercel, y el Backend (API RESTful en Node.js/Express) está alojado en Render.

🛑 ADVERTENCIA DE ACCESO (Modo Gratuito)

Debido a que el Backend y la Base de Datos están operando bajo planes gratuitos para el portafolio, existe una restricción de acceso para evitar exceder las cuotas de uso y mantener el servicio en línea.

PARA REALIZAR PRUEBAS DE INICIO DE SESIÓN, REGISTRO Y FUNCIONALIDAD COMPLETA, DEBE UTILIZAR EXCLUSIVAMENTE EL SIGUIENTE CORREO ELECTRÓNICO:

luismejias.vnzl@gmail.com ⬅️ ¡OBLIGATORIO PARA PRUEBAS!

Cualquier intento de registro con un correo diferente puede fallar o llevar a un bloqueo temporal del servicio.

🚀 Arquitectura y Tecnologías Clave

El proyecto se basa en una arquitectura moderna y desacoplada:

Área

Tecnología Principal

Despliegue/Servicio

Propósito

Frontend

🅰️ Angular (v17+) + TypeScript

Vercel

Interfaz de usuario dinámica y completamente responsiva (Tailwind CSS).

Backend (API)

🟢 Node.js (Express)

Render

Servidor de lógica de negocio y proxy para la IA.

Base de Datos

🍃 MongoDB

(Alojamiento externo)

Almacenamiento principal de consultas y datos de la aplicación.

Inteligencia Artificial

🧠 Gemini API (Google)

(Consumo desde el Backend)

Generación del análisis médico y las recomendaciones.

Autenticación

🔥 Firebase Auth (Firestore)

(Firebase Services)

Gestión de usuarios y tokens de sesión.

🛠️ Stack Tecnológico Completo

Una lista detallada de las herramientas utilizadas para construir MyDose:

Frontend (Angular)

Framework: Angular (v17+) con TypeScript y Standalone Components.

Estilos: Tailwind CSS para un diseño rápido, modular y responsivo.

Iconografía: Lucide Icons para la interfaz de usuario.

Despliegue: Vercel

Backend (API RESTful)

Lenguaje/Entorno: Node.js

Framework: Express.js para la creación de endpoints REST.

Base de Datos (Principal): MongoDB (almacenamiento de consultas y datos).

Base de Datos (Autenticación): Firestore (Firebase) (para la gestión de usuarios).

Autenticación: Firebase Auth (gestión de usuarios y tokens de sesión).

Servicio de IA: Gemini API (Google) para la generación de contenido médico.

Servicio de Email: Resend (asumiendo) para el envío de notificaciones y enlaces.

Despliegue: Render

✨ Características Destacadas

Análisis Inteligente en Tiempo Real: Interacción directa con la Gemini API.

Diseño Responsivo (Mobile First): Experiencia de Usuario (UX) optimizada para todos los dispositivos.

Integración Social Optimizada: Botones funcionales para compartir el análisis por WhatsApp y correo electrónico.

Arquitectura Nube Desacoplada: Demostración de CI/CD utilizando Vercel (Frontend) y Render (Backend).

Estructura Angular Moderna: Uso de Componentes Standalone (sin NgModules) para una aplicación más limpia y optimizada.

⚙️ Configuración del Entorno (Local)

Para ejecutar este proyecto localmente:

Pasos Rápidos para Ejecución

Clonar Repositorio: git clone https://github.com/LuisMejias23/myDose-frontend.git

Instalar Dependencias: npm install

Ejecutar Servidor: ng serve

La aplicación estará disponible en http://localhost:4200/.

🌱 Carga de Datos Iniciales (Seed)

Si estás ejecutando el Backend localmente, debes cargar los datos iniciales (como la lista de síntomas) en la base de datos:

Abre el directorio del Backend.

Ejecuta el script de seed:

npm run seed


Este comando asegurará que tu base de datos MongoDB tenga la información necesaria para que la aplicación funcione correctamente.

🌐 Despliegue Continuo (CI/CD)

El proyecto demuestra un flujo de trabajo de despliegue automatizado:

1. Frontend: Angular en Vercel 🚀

Proceso: Conectado al repositorio de GitHub. Cada git push inicia un build automático.

URL de Producción (Demo): https://my-dose-frontend.vercel.app (Ejemplo).

2. Backend: API RESTful en Render ⚙️

Proceso: Render aloja y mantiene el servidor de la API en línea para el consumo del Frontend.

URL de Producción (API): https://mydose-api.onrender.com/api (Ejemplo).

🤝 Contacto

Nombre

Luis Mejias

Correo Electrónico

luismejias.vnzl@gmail.com

WhatsApp

+58 412-3093419

Repositorio

Frontend: https://github.com/LuisMejias23/myDose-frontend.git

Backend: https://github.com/LuisMejias23/myDose-backend.git

