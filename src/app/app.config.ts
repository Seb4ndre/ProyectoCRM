import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // ✅ Importar soporte HttpClient con interceptores

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    //provideRouter(Routes),
    provideHttpClient(withInterceptorsFromDi()) // ✅ Soporte HttpClient con interceptores
  ]
};
