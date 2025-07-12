import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BarraLateral } from '../barra-lateral/barra-lateral';
import { BarraSuperior } from '../barra-superior/barra-superior';

export interface Property {
  id: string;
  floor: number;
  unit: string;
  status: 'ocupado' | 'vacante' | 'mantenimiento';
  owner: string;
  fee: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, BarraLateral, BarraSuperior],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class dashboard implements OnInit {
      sidebarOculta = false;

  toggleSidebar() {
    this.sidebarOculta = !this.sidebarOculta;
  }
  properties: Property[] = [
    // Piso 3
    { id: "3A", floor: 3, unit: "A", status: "ocupado", owner: "Carlos Mendoza", fee: 650 },
    { id: "3B", floor: 3, unit: "B", status: "vacante", owner: "Ana Ruiz", fee: 620 },
    { id: "3C", floor: 3, unit: "C", status: "ocupado", owner: "Pedro Silva", fee: 670 },
    { id: "3D", floor: 3, unit: "D", status: "mantenimiento", owner: "Laura Torres", fee: 640 },
    
    // Piso 2
    { id: "2A", floor: 2, unit: "A", status: "ocupado", owner: "Miguel Ángel", fee: 650 },
    { id: "2B", floor: 2, unit: "B", status: "ocupado", owner: "Rosa Martínez", fee: 620 },
    { id: "2C", floor: 2, unit: "C", status: "vacante", owner: "José Ramírez", fee: 670 },
    { id: "2D", floor: 2, unit: "D", status: "ocupado", owner: "Carmen López", fee: 640 },
    
    // Piso 1
    { id: "1A", floor: 1, unit: "A", status: "ocupado", owner: "Roberto Díaz", fee: 480 },
    { id: "1B", floor: 1, unit: "B", status: "ocupado", owner: "Elena Vargas", fee: 460 },
    { id: "1C", floor: 1, unit: "C", status: "mantenimiento", owner: "Fernando Castro", fee: 500 },
    { id: "1D", floor: 1, unit: "D", status: "vacante", owner: "Lucía Herrera", fee: 480 }
  ];

  selected: Property | null = null;
  floors: number[] = [3, 2, 1];

  ngOnInit(): void {
    // Initialization logic if needed
  }

  get occupied(): number {
    return this.properties.filter(p => p.status === 'ocupado').length;
  }

  get total(): number {
    return this.properties.length;
  }

  get revenue(): number {
    return this.properties.filter(p => p.status === 'ocupado').reduce((sum, p) => sum + p.fee, 0);
  }

  get vacant(): number {
    return this.properties.filter(p => p.status === 'vacante').length;
  }

  get occupancyRate(): number {
    return Math.round((this.occupied / this.total) * 100);
  }

  getFloorProperties(floor: number): Property[] {
    return this.properties.filter(p => p.floor === floor).sort((a, b) => a.unit.localeCompare(b.unit));
  }



  getStatusText(status: Property['status']): string {
    switch (status) {
      case 'ocupado': return 'Ocupado';
      case 'vacante': return 'Disponible';
      case 'mantenimiento': return 'Mantenimiento';
    }
  }

  getStatusColor(status: Property['status']): string {
    switch (status) {
      case 'ocupado': return 'bg-green-500';
      case 'vacante': return 'bg-red-500';
      case 'mantenimiento': return 'bg-yellow-500';
    }
  }

  formatMoney(amount: number): string {
    return `$${amount.toLocaleString()}`;
  }

  selectProperty(property: Property): void {
    this.selected = property;
  }

  getFloorOccupancyRate(floor: number): number {
    const floorProps = this.getFloorProperties(floor);
    const floorOccupied = floorProps.filter(p => p.status === 'ocupado').length;
    return Math.round((floorOccupied / floorProps.length) * 100);
  }

  getFloorOccupied(floor: number): number {
    return this.getFloorProperties(floor).filter(p => p.status === 'ocupado').length;
  }
  // Lista de todas las propiedades posibles
propiedades: string[] = [
  'Edificio Central',
  'Torre Norte',
  'Residencial Sol',
  'Altos del Mar',
  'Vista Bella'
];

// Lista que se muestra (filtrada con input)
propiedadesFiltradas: string[] = [...this.propiedades];

// Maneja cambios en el input de búsqueda
filtrarOpciones(): void {
  const input = (document.getElementById('input-buscador') as HTMLInputElement).value.toLowerCase();
  this.propiedadesFiltradas = this.propiedades.filter(p =>
    p.toLowerCase().includes(input)
  );
}

// Maneja la selección de una propiedad
filtrarDashboard(event: Event): void {
  const seleccionada = (event.target as HTMLSelectElement).value;
  console.log('Propiedad seleccionada:', seleccionada);

  // Aquí puedes implementar la lógica para actualizar el contenido del dashboard
  // Por ejemplo:
  // this.propiedadSeleccionada = seleccionada;
  // this.actualizarDashboard(seleccionada);
}

}