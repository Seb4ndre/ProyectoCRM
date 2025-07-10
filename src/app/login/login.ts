import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionesApiServices } from '../ApiServices/ApiServices';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private configuracionesApiServices: ConfiguracionesApiServices
  ) {}

  onSubmit(): void {
    const datos = {
      usuario: this.email,
      contraseña: this.password
    };

  this.configuracionesApiServices.ChequearID(datos).subscribe(
    (res: boolean) => {
      if (res) {
        // Login exitoso
        this.router.navigate(['/vista-asociados']);
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    },
    (error) => {
      console.error('Error al autenticar:', error);
      alert('Error al conectar con el servidor: ' + (error.message || JSON.stringify(error)));
    }
  );

  }
}