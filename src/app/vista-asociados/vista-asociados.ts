import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateral } from '../barra-lateral/barra-lateral';
import { BarraSuperior } from '../barra-superior/barra-superior';

@Component({
  selector: 'app-socios',
  standalone: true,
  templateUrl: './vista-asociados.html',
  styleUrls: ['./vista-asociados.css'],
  imports: [CommonModule, BarraLateral, BarraSuperior],
})
export class VistaAsociados {
   sidebarOculta = false;

  toggleSidebar() {
    this.sidebarOculta = !this.sidebarOculta;
  }
}
