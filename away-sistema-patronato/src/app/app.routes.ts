import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./components/layout/layout.component').then(m => m.LayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'assistidos',
        loadComponent: () => import('./components/assistidos/assistido-list/assistido-list.component').then(m => m.AssistidoListComponent)
      },
      {
        path: 'agendamentos',
        loadComponent: () => import('./components/agendamentos/agendamento-list/agendamento-list.component').then(m => m.AgendamentoListComponent)
      },
      {
        path: 'visitas',
        loadComponent: () => import('./components/visitas/visita-list/visita-list.component').then(m => m.VisitaListComponent)
      },
      {
        path: 'documentos',
        loadComponent: () => import('./components/documentos/documento-list/documento-list.component').then(m => m.DocumentoListComponent)
      },
      {
        path: 'relatorios',
        loadComponent: () => import('./components/relatorios/relatorio-list/relatorio-list.component').then(m => m.RelatorioListComponent)
      },
      {
        path: 'usuarios',
        loadComponent: () => import('./components/usuarios/usuario-list/usuario-list.component').then(m => m.UsuarioListComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
