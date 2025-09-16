import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VisitaService } from '../../../services/visita.service';
import { Visita, VisitaFiltro, StatusVisita, TipoVisita } from '../../../models/visita.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-visita-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './visita-list.component.html',
  styleUrl: './visita-list.component.scss'
})
export class VisitaListComponent implements OnInit {
  visitas: Visita[] = [];
  filtro: VisitaFiltro = {
    page: 0,
    size: 10
  };
  loading = false;
  totalElements = 0;
  totalPages = 0;
  currentPage = 0;

  statusOptions = Object.values(StatusVisita);
  tipoVisitaOptions = Object.values(TipoVisita);

  constructor(private visitaService: VisitaService) {}

  ngOnInit(): void {
    this.carregarVisitas();
  }

  carregarVisitas(): void {
    this.loading = true;
    this.visitaService.listar(this.filtro).subscribe({
      next: (response) => {
        this.visitas = response.content || [];
        this.totalElements = response.totalElements || 0;
        this.totalPages = response.totalPages || 0;
        this.currentPage = response.number || 0;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'Erro ao carregar visitas',
          text: error.error || 'Erro interno do servidor',
          confirmButtonText: 'OK'
        });
      }
    });
  }

  pesquisar(): void {
    this.filtro.page = 0;
    this.carregarVisitas();
  }

  limparFiltros(): void {
    this.filtro = { page: 0, size: 10 };
    this.carregarVisitas();
  }

  getStatusText(status: StatusVisita): string {
    switch (status) {
      case StatusVisita.AGENDADA: return 'Agendada';
      case StatusVisita.REALIZADA: return 'Realizada';
      case StatusVisita.CANCELADA: return 'Cancelada';
      case StatusVisita.REAGENDADA: return 'Reagendada';
      default: return status;
    }
  }

  getTipoVisitaText(tipo: TipoVisita): string {
    switch (tipo) {
      case TipoVisita.DOMICILIAR: return 'Domiciliar';
      case TipoVisita.INSTITUCIONAL: return 'Institucional';
      case TipoVisita.URGENTE: return 'Urgente';
      default: return tipo;
    }
  }
}
