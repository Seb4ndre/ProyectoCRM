import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateral } from '../barra-lateral/barra-lateral';
import { BarraSuperior } from '../barra-superior/barra-superior';
import { FormsModule } from '@angular/forms';
import { AfterViewInit } from '@angular/core';
declare var bootstrap: any; // Importación de Bootstrap para usar el modal

@Component({
  selector: 'app-vista-ph',
  standalone: true,
  imports: [CommonModule, BarraLateral, BarraSuperior, FormsModule],
  templateUrl: './vista-ph.html',
  styleUrl: './vista-ph.css',
})
export class VistaPh {
  sidebarOculta = false;
  mostrarFormulario = false;
  modoEdicion = false;
  indiceEditando: number | null = null;

  propiedadSeleccionada: any = null;
  indiceAEliminar: number | null = null;
  modal: any;

  ngAfterViewInit() {
    const modalElement = document.getElementById('modalConfirmacion');
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
    }
  }

  propiedades = [
    {
      nombre: 'PH BAHIA',
      ubicacion: 'Nueva Gorgona, Panamá Oeste',
      valor: 'B/.285,000',
      estado: 'Bien mantenido',
    },
    {
      nombre: 'PH Greenview',
      ubicacion: 'Santa María, Ciudad de Panamá',
      valor: 'B/.275,000',
      estado: 'En excelente condición',
    },
    {
      nombre: 'PH Costamare',
      ubicacion: 'Costa Sur, Ciudad de Panamá',
      valor: 'B/.235,000',
      estado: 'Requiere atención',
    },
    {
      nombre: 'PH Asia',
      ubicacion: 'Costa del Este, Ciudad de Panamá',
      valor: 'B/.325,000',
      estado: 'Totalmente remodelado',
    },
    {
      nombre: 'PH ICON TOWER',
      ubicacion: 'Coco del Mar, Ciudad de Panamá',
      valor: 'B/.550,000',
      estado: 'Bien mantenido',
    }
  ];

  nuevaPropiedad = {
    nombre: '',
    ubicacion: '',
    valor: '',
    estado: ''
  };

  toggleSidebar() {
    this.sidebarOculta = !this.sidebarOculta;
  }

  abrirFormulario() {
    this.mostrarFormulario = true;
  }

  cerrarFormulario() {
    this.mostrarFormulario = false;
    this.modoEdicion = false;
    this.indiceEditando = null;
    this.nuevaPropiedad = { nombre: '', ubicacion: '', valor: '', estado: '' };
  }

  guardarPropiedad() {
    if (this.modoEdicion && this.indiceEditando !== null) {
      this.propiedades[this.indiceEditando] = { ...this.nuevaPropiedad };
    } else {
      this.propiedades.push({ ...this.nuevaPropiedad });
    }
    this.cerrarFormulario();
  }

  editarPropiedad(index: number) {
    this.modoEdicion = true;
    this.indiceEditando = index;
    this.nuevaPropiedad = { ...this.propiedades[index] };
    this.mostrarFormulario = true;
  }

  eliminarPropiedad(index: number) {
  this.propiedadSeleccionada = { ...this.propiedades[index] };
  this.indiceAEliminar = index;
  this.modal.show();
}

confirmarEliminacion() {
  if (this.indiceAEliminar !== null) {
    this.propiedades.splice(this.indiceAEliminar, 1);
  }
  this.modal.hide();
  this.propiedadSeleccionada = null;
  this.indiceAEliminar = null;
}

}