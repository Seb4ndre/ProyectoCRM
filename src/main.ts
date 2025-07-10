import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { App } from './app/app'; // Asegúrate del nombre correcto
import { LoginComponent } from './app/login/login';
import { VistaAsociados } from './app/vista-asociados/vista-asociados';
import { VistaPh } from './app/vista-ph/vista-ph';
import { VistaNormativas } from './app/vista-normativas/vista-normativas';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'vista-asociados', component: VistaAsociados },
  { path: 'vista-normativas', component: VistaNormativas },
  { path: 'vista-ph', component: VistaPh },
  { path: '**', redirectTo: '/login' }, // Ruta wildcard para manejar rutas no encontradas
];

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));