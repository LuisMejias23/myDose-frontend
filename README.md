MyDose

Aplicación frontend en Angular 19 para gestionar consultas y recomendaciones (myDose).

## Descripción
MyDose es una SPA construida con Angular 19 que permite ingresar datos de consulta, obtener una respuesta (mediante una API externa) y compartir resultados. Incluye configuración para SSR, TailwindCSS y un servicio que consume una API REST en `http://localhost:3000/api`.

## Características principales
- Frontend en Angular 19.
- TailwindCSS para estilos utilitarios.
- Soporte opcional para SSR (server-side rendering) con Express.
- Servicios para comunicación con API (consultas y compartir resultados).
- Componentes organizados por funcionalidad en `src/app/components`.

## Requisitos
- Node.js >= 18
- npm (versión compatible con Node.js instalado)
- Angular CLI (se recomienda instalar la misma versión usada por el proyecto: ^19.2.13)

## Instalación
1. Clona el repositorio:

```bash
git clone https://github.com/LuisMejias23/myDose-frontend.git
```

2. Entra en el directorio:

```bash
cd myDose-frontend
```

3. Instala dependencias:

```bash
npm install
```

## Desarrollo (servidor local)
- Iniciar servidor de desarrollo:

```bash
ng serve
```

- Abrir: http://localhost:4200

- Ejecutar tests unitarios:

```bash
ng test
```

## Build y SSR
- Para generar build de producción:

```bash
ng build --configuration production
```

- Para servir la versión SSR (si ya generaste la build SSR):

```bash
node dist/my-dose/server/server.mjs
```

- Script disponible en `package.json`: `serve:ssr:My-Dose`

## Configuración de la API
El frontend actualmente apunta por defecto a:

```
http://localhost:3000/api
```

Puedes cambiar este valor en `src/app/services/data.service.ts` o migrarlo a `src/environments/environment.ts` para manejar entornos (recomendado).

## Backend
Este proyecto frontend trabaja junto a un backend que expone una API REST en `/api` (por defecto el `DataService` apunta a `http://localhost:3000/api`).

Notas sobre el backend:
- El backend puede estar en un repositorio o carpeta separada. Si está en otro repositorio, clónalo junto con este frontend.
- Variables comunes que el backend podría necesitar: `PORT` (por defecto 3000), `MONGO_URI` o `DATABASE_URL`, `JWT_SECRET`, etc. Revisa la documentación del backend para valores exactos.
- Para desarrollar localmente, inicia primero el backend (por ejemplo `npm install` y `npm start` o `node index.js` según el repo) y luego ejecuta el frontend con `ng serve`.

Ejemplo (asumiendo backend en `../myDose-backend`):

```bash
# en una terminal
cd ../myDose-backend
npm install
npm start

# en otra terminal, en este repo
cd myDose-frontend
npm install
ng serve
```

Si el backend corre en otra URL o puerto, actualiza `apiUrl` en `src/app/services/data.service.ts` o usa variables de entorno en `src/environments`.

## Estilos e imagen de fondo
El archivo `src/styles.scss` actualmente carga una imagen de fondo desde una URL externa.

Notas:
- Revisa la licencia de la imagen externa antes de usarla en producción.
- Para usar una imagen local, copia la imagen a `src/assets/` o `public/` y actualiza `src/styles.scss`:

```scss
background-image: url('assets/background.jpg');
```

## Rutas y componentes importantes
- `src/app/app.routes.ts`: rutas principales, incluye `share/:id`.
- `src/app/components`: componentes principales como `form-dose`, `data-dose`, `login`, `register`, `share`.
- `src/app/services/data.service.ts`: cliente HTTP para la API.

## Scripts útiles (package.json)
- `npm start` -> `ng serve`
- `npm run build` -> `ng build`
- `npm run test` -> `ng test`
- `npm run watch` -> `ng build --watch --configuration development`
- `npm run serve:ssr:My-Dose` -> `node dist/my-dose/server/server.mjs`

## Consejos para despliegue
- Mover la URL del API a variables de entorno.
- Asegurar manejo de CORS en el backend.
- Si usas SSR, desplegar `dist/my-dose` y ejecutar el server con Node.
- Usar un CDN para activos estáticos pesados si la aplicación lo requiere.

## Licencias y recursos
- Verificar licencias de cualquier recurso externo (p. ej., la imagen en 123rf).
- Código: agrega una licencia al repo (por ejemplo MIT) si deseas permitir uso libre.

## Badges sugeridos
- Build / CI: (añadir badge de tu CI)
- Tests: (añadir badge de cobertura de tests)
- License: (añadir badge de licencia)

## Próximos pasos recomendados
- Mover `apiUrl` a `src/environments`.
- Añadir CI (GitHub Actions) para: install + build + test.
- Añadir E2E tests (Cypress).
- Mejorar tipado de `DataService` y añadir interceptores HTTP.
- Añadir CONTRIBUTING.md y LICENSE si esperas contribuciones.
# MyDose

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
