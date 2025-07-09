import { Component, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngIf, *ngFor, etc.

@Component({
  selector: 'app-barra-superior',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barra-superior.html',
  styleUrls: ['./barra-superior.css']
})
export class BarraSuperior {
  @Output() toggleMenu = new EventEmitter<void>();

  onToggle() {
    this.toggleMenu.emit();
  }
}

