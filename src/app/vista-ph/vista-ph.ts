import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateral } from '../barra-lateral/barra-lateral';
import { BarraSuperior } from '../barra-superior/barra-superior';
import { FormsModule } from '@angular/forms';
import { ConfiguracionesApiServices } from '../ApiServices/ApiServices';
declare var bootstrap: any;

@Component({
  selector: 'app-vista-ph',
  standalone: true,
  imports: [CommonModule, BarraLateral, BarraSuperior, FormsModule],
  templateUrl: './vista-ph.html',
  styleUrl: './vista-ph.css',
})
export class VistaPh implements OnInit, AfterViewInit {
  PHs: any[] = [];
  username: string | null = null;
  sidebarOculta = false;
  mostrarFormulario = false;
  modoEdicion = false;
  indiceEditando: number | null = null;
  propiedadSeleccionada: any = null;
  indiceAEliminar: number | null = null;
  modal: any;

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
    },
  ];

  nuevaPropiedad = {
    nombre: '',
    ubicacion: '',
    valor: '',
    estado: '',
  };

  constructor(private configuracionesApiServices: ConfiguracionesApiServices) {
    this.username = localStorage.getItem('username');
  }

  ngOnInit(): void {
    this.TraerPHPorUsuario();
  }

  ngAfterViewInit(): void {
    const modalElement = document.getElementById('modalConfirmacion');
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
    }
  }

  TraerPHPorUsuario(): void {

    if (!this.username) return;

    const data = { username: this.username };


    this.configuracionesApiServices.TraerPHs(data).subscribe({
      next: (data) => {
        // Transformar los datos
        this.PHs = data.map((ph: any) => {
          return {
            ...ph,
            Nombre: ph.Nombre?.toUpperCase() ?? '', // ejemplo: poner nombre en mayúsculas
            Direccion: ph.Direccion
          };
        });
        

      },
      error: (error) => {
        console.error('Error al cargar usuarios:', error);
      },
    });

  }

  toggleSidebar(): void {
    this.sidebarOculta = !this.sidebarOculta;
  }

  abrirFormulario(): void {
    this.mostrarFormulario = true;
  }

  cerrarFormulario(): void {
    this.mostrarFormulario = false;
    this.modoEdicion = false;
    this.indiceEditando = null;
    this.nuevaPropiedad = { nombre: '', ubicacion: '', valor: '', estado: '' };
  }

  guardarPropiedad(): void {
    if (this.modoEdicion && this.indiceEditando !== null) {
      this.propiedades[this.indiceEditando] = { ...this.nuevaPropiedad };
    } else {
      this.propiedades.push({ ...this.nuevaPropiedad });
    }
    this.cerrarFormulario();
  }

  editarPropiedad(index: number): void {
    this.modoEdicion = true;
    this.indiceEditando = index;
    this.nuevaPropiedad = { ...this.propiedades[index] };
    this.mostrarFormulario = true;
  }

  eliminarPropiedad(index: number): void {
    this.propiedadSeleccionada = { ...this.propiedades[index] };
    this.indiceAEliminar = index;
    this.modal.show();
  }

  confirmarEliminacion(): void {
    if (this.indiceAEliminar !== null) {
      this.propiedades.splice(this.indiceAEliminar, 1);
    }
    this.modal.hide();
    this.propiedadSeleccionada = null;
    this.indiceAEliminar = null;
  }
}
