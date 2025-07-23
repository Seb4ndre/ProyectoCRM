import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateral } from '../barra-lateral/barra-lateral';
import { BarraSuperior } from '../barra-superior/barra-superior';
import { FormsModule } from '@angular/forms';
import { AfterViewInit } from '@angular/core';
declare var bootstrap: any;


@Component({
  selector: 'app-socios',
  standalone: true,
  templateUrl: './vista-asociados.html',
  styleUrls: ['./vista-asociados.css'],
  imports: [CommonModule, BarraLateral, BarraSuperior, FormsModule],
})
export class VistaAsociados {
  sidebarOculta = false;
  mostrarFormulario = false;

  modoEdicion = false;
  indiceEditando: number | null = null;

  asociadoSeleccionado: any = null;
  indiceAsociadoEliminar: number | null = null;
  modalEliminarAsociado: any;

  ngAfterViewInit() {
    const modalEl = document.getElementById('modalEliminarAsociado');
    if (modalEl) {
      this.modalEliminarAsociado = new bootstrap.Modal(modalEl);
    }
  }

  asociados = [
    { nombre: 'Lindsey Stroud', email: 'lindsey.stroud@gmail.com', departamento: 'Technology Department', rol: 'Head of Technology' },
    { nombre: 'Sarah Brown', email: 'sarah.brown@gmail.com', departamento: 'Technology Department', rol: 'Head of Technology' },
    { nombre: 'Michael Owen', email: 'michael.owen@gmail.com', departamento: 'Technology Department', rol: 'Head of Technology' },
    { nombre: 'Mary Jane', email: 'mary.jane@gmail.com', departamento: 'Technology Department', rol: 'Head of Technology' },
    { nombre: 'Peter Dodle', email: 'peter.dodle@gmail.com', departamento: 'Technology Department', rol: 'Head of Technology' }
  ];

  nuevoAsociado = {
    nombre: '',
    email: '',
    departamento: '',
    rol: ''
  };

  abrirFormulario() {
    this.mostrarFormulario = true;
  }

  cerrarFormulario() {
    this.mostrarFormulario = false;
    this.modoEdicion = false;
    this.indiceEditando = null;
    this.limpiarFormulario();
  }


  guardarAsociado() {
    if (this.modoEdicion && this.indiceEditando !== null) {
      this.asociados[this.indiceEditando] = { ...this.nuevoAsociado };
    } else {
      this.asociados.push({ ...this.nuevoAsociado });
    }
    this.cerrarFormulario();
  }

  limpiarFormulario() {
    this.nuevoAsociado = {
      nombre: '',
      email: '',
      departamento: '',
      rol: ''
    };
  }

  eliminarAsociado(index: number) {
    this.asociadoSeleccionado = { ...this.asociados[index] };
    this.indiceAsociadoEliminar = index;
    this.modalEliminarAsociado.show();
  }

  confirmarEliminacionAsociado() {
    if (this.indiceAsociadoEliminar !== null) {
      this.asociados.splice(this.indiceAsociadoEliminar, 1);
    }
    this.modalEliminarAsociado.hide();
    this.asociadoSeleccionado = null;
    this.indiceAsociadoEliminar = null;
  }

  editarAsociado(index: number) {
    this.modoEdicion = true;
    this.indiceEditando = index;
    this.nuevoAsociado = { ...this.asociados[index] };
    this.mostrarFormulario = true;
  }

  toggleSidebar() {
    this.sidebarOculta = !this.sidebarOculta;
  }
}