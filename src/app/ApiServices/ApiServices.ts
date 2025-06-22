import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Desde ApiServices.ts

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionesApiServices {

  private _data = new BehaviorSubject<any>(null);
  private _dataTipoUsuario = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  get data$(): Observable<any> {
    return this._data.asObservable();
  }

  get dataTipoUsuario$(): Observable<any> {
    return this._dataTipoUsuario.asObservable();
  }

  // Ejemplo de método que se conecta a una API
  ObtenerTiposCategoria(datos: any): Observable<any> {
    return this.http.post<any>(
      `${environment.URL_Api}api/Solicitud/TestUC`,
      datos,
      httpOptions
    );
  }
}
