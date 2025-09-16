import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgendamentoService } from '../../../services/agendamento.service';
import { Agendamento, AgendamentoFiltro, StatusAgendamento, TipoAtividade } from '../../../models/agendamento.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agendamento-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agendamento-list.component.html',
  styleUrl: './agendamento-list.component.scss'
})
export class AgendamentoListComponent implements OnInit {
  agendamentos: Agendamento[] = [];
  filtro: AgendamentoFiltro = {
    page: 0,
    size: 10
  };
  loading = false;
  totalElements = 0;
  totalPages = 0;
  currentPage = 0;

  statusOptions = Object.values(StatusAgendamento);
  tipoAtividadeOptions = Object.values(TipoAtividade);

  constructor(private agendamentoService: AgendamentoService) {}

  ngOnInit(): void {
    this.carregarAgendamentos();
  }

  carregarAgendamentos(): void {
    this.loading = true;
    this.agendamentoService.listar(this.filtro).subscribe({
      next: (response) => {
        this.agendamentos = response.content || [];
        this.totalElements = response.totalElements || 0;
        this.totalPages = response.totalPages || 0;
        this.currentPage = response.number || 0;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'Erro ao carregar agendamentos',
          text: error.error || 'Erro interno do servidor',
          confirmButtonText: 'OK'
        });
      }
    });
  }

  pesquisar(): void {
    this.filtro.page = 0;
    this.carregarAgendamentos();
  }

  limparFiltros(): void {
    this.filtro = { page: 0, size: 10 };
    this.carregarAgendamentos();
  }

  alterarPagina(pagina: number): void {
    this.filtro.page = pagina;
    this.carregarAgendamentos();
  }

  getStatusText(status: StatusAgendamento): string {
    switch (status) {
      case StatusAgendamento.AGENDADO: return 'Agendado';
      case StatusAgendamento.CONFIRMADO: return 'Confirmado';
      case StatusAgendamento.REALIZADO: return 'Realizado';
      case StatusAgendamento.CANCELADO: return 'Cancelado';
      case StatusAgendamento.FALTA: return 'Falta';
      default: return status;
    }
  }

  getTipoAtividadeText(tipo: TipoAtividade): string {
    switch (tipo) {
      case TipoAtividade.ORIENTACAO: return 'Orientação';
      case TipoAtividade.TRABALHO: return 'Trabalho';
      case TipoAtividade.EDUCACAO: return 'Educação';
      case TipoAtividade.SAUDE: return 'Saúde';
      case TipoAtividade.OUTROS: return 'Outros';
      default: return tipo;
    }
  }
}
