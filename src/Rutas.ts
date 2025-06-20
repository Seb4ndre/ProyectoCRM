import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/dashboards/project'
    { path: '', pathMatch: 'full', redirectTo: 'inicio' },

    // Redirect signed-in user to the '/dashboards/project'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'autentificacion/validando' },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.routes') },
            { path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.routes') },
            { path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.routes') },
            { path: 'inicio', loadChildren: () => import('app/modules/auth/sign-in/sign-in.routes') },
            { path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.routes') },
            { path: 'validando', loadChildren: () => import('app/modules/auth/validando-usuario/validando-usuario.router') },
            { path: 'registroAgenteResidente', loadChildren: () => import('app/modules/formularios/agentes-residentes/registro/registro.router') },

        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.routes') },
            { path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.routes') }
        ]
    },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'home', loadChildren: () => import('app/modules/landing/home/home.routes') },
        ]

        
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        children: [

            {
                path: 'autentificacion', children: []
            },

            /*
            VERIFICACION
            */
            {
                path: 'verificacionAutorizacion', children: [
                    { path: 'token', loadChildren: () => import('app/modules/administrador/dashboard/dashboard-adm.router') },
                ]
            },
            
            /*ADMINISTRACION */
            {
                path: 'administracion', children: [
                    /*  NEW */
                    { path: 'dashboardAdmin', loadChildren: () => import('app/modules/administrador/dashboard/dashboard-adm.router') },
                    { path: 'VerUsuarios', loadChildren: () => import('app/modules/administrador/usuarios/ver-usuarios/ver-usuarios.router') },
                    { path: 'CrearUsuarios', loadChildren: () => import('app/modules/administrador/usuarios/crear-usuarios/crear-usuarios.router') },
                    { path: 'EditarUsuario/:id', loadChildren: () => import('app/modules/administrador/usuarios/editar-usuarios/editar-usuario.router') },
                    { path: 'permisos', loadChildren: () => import('app/modules/administrador/configuraciones/config-permisos/config-permisos.router'), canActivate: [AuthGuard], },
                    { path: 'roles', loadChildren: () => import('app/modules/administrador/configuraciones/config-roles/config-roles.router'), canActivate: [AuthGuard], },
                ]
            },

            /MESADEAYUDA/
            {
                path:'mesaayuda', children: [
                    { path: 'PaginaInicial', loadChildren: () => import('app/modules/General/Pagina-Inicial/Pagina-Inicial.routes') },
                    { path: 'VerSolicitudes', loadChildren: () => import('app/modules/General/ver-solicitudes/ver-solicitudes.routes') },
                    { path: 'VerSolicitudesUsuario', loadChildren: () => import('app/modules/General/ver-solicitudes-SSNF/ver-solicitudesUsuario.routes') },
                    { path: 'CrearSolicitudes', loadChildren: () => import('app/modules/General/crear-solicitudes/crear-solicitudes.routes') }
                ]
            },
            {
                path: 'AgenteResidente', children: [
                    { path: 'dashboard', loadChildren: () => import('app/modules/personal-AR/dashboard-ar/dashboard-ar.router') },
                    { path: 'solicitarAtencion/:idAR/:idFlujo', loadChildren: () => import('app/modules/personal-AR/crear-tickets-ar/crear-tickets-ar.router') },
                    { path: 'misSolicitudes', loadChildren: () => import('app/modules/personal-AR/ver-atenciones/ver-atenciones.router') },
                ]
            },
            {
                path: 'personalSSNF', children: [
                    { path: 'dashboard', loadChildren: () => import('app/modules/personal-rubf/dashboards/atenciones/atenciones.router') },
                    { path: 'formulariosResgistro', loadChildren: () => import('app/modules/personal-rubf/ver-formulario-registro/ver-formulario-registro.router') },
                    { path: 'verHistorialCasos', loadChildren: () => import('app/modules/personal-rubf/ver-historial-casos/ver-historial-casos.router') },
                    { path: 'agendarCitaRegistro/:id', loadChildren: () => import('app/modules/personal-rubf/agendar-cita/agendar-cita.router') },
                    { path: 'verAgendaSoporte', loadChildren: () => import('app/modules/personal-rubf/ver-agenda/ver-agenda.router') },
                    { path: 'crearFichaTecnica/:id/:idTicket', loadChildren: () => import('app/modules/personal-rubf/crear-ficha-tecnica/crear-ficha-tecnica.router') },
                    { path: 'buscarAgenteResidente', loadChildren: () => import('app/modules/personal-rubf/buscar-agente-residente/buscar-agente-residente.router') },
                    { path: 'verAgenteResidente/:id', loadChildren: () => import('app/modules/personal-rubf/ver-agente-residente/ver-agente-residente.router') },
                    { path: 'verAtencionRealizada/:id', loadChildren: () => import('app/modules/personal-rubf/ver-atencion-realizada/ver-atencion-realizada.router') },
                    { path: 'crearTicketAtencion/:idAR/:idFlujo', loadChildren: () => import('app/modules/personal-rubf/crear-ticket-atencion/crear-ticket-atencion.router') },
                    { path: 'registrarAgenteResidente', loadChildren: () => import('app/modules/personal-rubf/registrar-agente-residentes-nuevo/registrar-agente-residentes-nuevo.router') },
                    { path: 'crearTicketManual', loadChildren: () => import('app/modules/personal-rubf/crear-ticket-manual/crear-ticket-manual.router') },
                    { path: 'actualizarCitaRegistro/:id', loadChildren: () => import('app/modules/personal-rubf/actualizar-cita/actualizar-cita.router') },
             ]
            },
            {
                path: 'reporteSSNF', children: [
                    { path: 'solicitudesCant', loadChildren: () => import('app/modules/reportes/cant-solicitudes/cant-solicitudes.router') },
                    { path: 'solicitudesUsuario', loadChildren: () => import('app/modules/reportes/solicitudes-usuarios/solicitudes-usuarios.router') },
                    { path: 'formularioRegistro', loadChildren: () => import('app/modules/reportes/formulario-registro/formulario-registro.router') },
                ]
            },

            // 404 & Catch all
            { path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.routes') },
            { path: '**', redirectTo: '404-not-found' }
        ]
    }
];