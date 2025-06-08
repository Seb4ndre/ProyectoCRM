import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { App } from './app/app'; // Asegúrate del nombre correcto
import { LoginComponent } from './app/login/login';
import { VistaAsociados } from './app/vista-asociados/vista-asociados';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'vista-asociados', component: VistaAsociados },
  { path: '**', redirectTo: '/login' } // Ruta wildcard para manejar rutas no encontradas
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));