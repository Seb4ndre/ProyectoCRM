import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateral } from '../barra-lateral/barra-lateral';
import { BarraSuperior } from '../barra-superior/barra-superior';
import { ConfiguracionesApiServices } from '../ApiServices/ApiServices';

@Component({
  selector: 'app-vista-normativas',
  standalone: true,
  imports: [CommonModule, BarraLateral, BarraSuperior],
  templateUrl: './vista-normativas.html',
  styleUrl: './vista-normativas.css',
})
export class VistaNormativas implements OnInit {
  sidebarOculta = false;
  normativas: any[] = [];

  constructor(
    private configuracionesApiServices: ConfiguracionesApiServices
  ) {}

  ngOnInit() {
    this.TraerNormativas();
  }

  TraerNormativas(){
    this.configuracionesApiServices.TraerNormativas().subscribe({
      next: (data) => {
        this.normativas = data;

      },
      error: (error) => {
        console.error('Error al cargar normativas:', error);
      }
    });
  }
  abrirArchivo(ruta: string): void {
    if (ruta) {
      window.open(ruta, '_blank');
    } else {
      console.warn('No se encontró la ruta del archivo.');
    }
  }
  toggleSidebar() {
    this.sidebarOculta = !this.sidebarOculta;
  }
}
