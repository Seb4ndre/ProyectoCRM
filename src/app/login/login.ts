import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [FormsModule, CommonModule],   
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router){}

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    if(this.email && this.password){
      this.router.navigate(['/vista-asociados'])
    }
    // Aquí puedes agregar lógica de autenticación
  }
}