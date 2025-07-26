import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateral } from '../barra-lateral/barra-lateral';
import { BarraSuperior } from '../barra-superior/barra-superior';

@Component({
  selector: 'app-vista-normativas',
  standalone: true,
  imports: [CommonModule, BarraLateral, BarraSuperior],
  templateUrl: './vista-normativas.html',
  styleUrl: './vista-normativas.css',
})
export class VistaNormativas {
  sidebarOculta = false;

  toggleSidebar() {
    this.sidebarOculta = !this.sidebarOculta;
  }
}
