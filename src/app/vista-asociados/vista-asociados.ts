import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateral } from '../barra-lateral/barra-lateral';
import { BarraSuperior } from '../barra-superior/barra-superior';
import { FormsModule } from '@angular/forms';
import { ConfiguracionesApiServices } from '../ApiServices/ApiServices';
declare var bootstrap: any;


@Component({
  selector: 'app-socios',
  standalone: true,
  templateUrl: './vista-asociados.html',
  styleUrls: ['./vista-asociados.css'],
  imports: [CommonModule, BarraLateral, BarraSuperior, FormsModule],
})
export class VistaAsociados implements OnInit, AfterViewInit {
  sidebarOculta = false;
  mostrarFormulario = false;

  modoEdicion = false;
  indiceEditando: number | null = null;

  asociadoSeleccionado: any = null;
  indiceAsociadoEliminar: number | null = null;
  modalEliminarAsociado: any;
  asociados: any[] = [];

  nuevoAsociado = {
    nombre: '',
    email: '',
    departamento: '',
    rol: ''
  };

  constructor(
    private configuracionesApiServices: ConfiguracionesApiServices
  ) {
    
  }

  ngOnInit() {
    this.TraerUsuarios();
  }

  TraerUsuarios(){
    this.configuracionesApiServices.TraerUsuarios().subscribe({
      next: (data) => {
        this.asociados = data;
      },
      error: (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    });
  }

  ngAfterViewInit() {
    const modalEl = document.getElementById('modalEliminarAsociado');
    if (modalEl) {
      this.modalEliminarAsociado = new bootstrap.Modal(modalEl);
    }
  }
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