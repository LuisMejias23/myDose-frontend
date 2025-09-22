// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { FormDoseComponent } from './components/form-dose/form-dose.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


export const routes: Routes = [
  { path: '', component: FormDoseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];
