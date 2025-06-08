import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-socios',
  standalone: true,
  templateUrl: './vista-asociados.html',
  styleUrls: ['./vista-asociados.css'],
  imports: [CommonModule]
})
export class VistaAsociados {
  socios = [
    { id: 1, nombre: 'Ana Pérez', cargo: 'Directora' },
    { id: 2, nombre: 'Luis Gómez', cargo: 'Analista' },
  ];
}
