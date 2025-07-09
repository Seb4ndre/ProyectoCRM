import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateral } from '../barra-lateral/barra-lateral';
import { BarraSuperior } from '../barra-superior/barra-superior';

@Component({
  selector: 'app-vista-ph',
  standalone: true,
  imports: [CommonModule, BarraLateral, BarraSuperior],
  templateUrl: './vista-ph.html',
  styleUrl: './vista-ph.css',
})
export class VistaPh {
  sidebarOculta = false;

  toggleSidebar() {
    this.sidebarOculta = !this.sidebarOculta;
  }
}
