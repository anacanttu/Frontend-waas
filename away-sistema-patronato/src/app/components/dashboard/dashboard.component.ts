import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssistidoService } from '../../services/assistido.service';
import { AgendamentoService } from '../../services/agendamento.service';
import { VisitaService } from '../../services/visita.service';
import { StatusAssistido } from '../../models/assistido.model';
import { StatusVisita } from '../../models/visita.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  stats = {
    totalAssistidos: 0,
    assistidosAtivos: 0,
    agendamentosHoje: 0,
    visitasPendentes: 0
  };

  loading = true;

  constructor(
    private assistidoService: AssistidoService,
    private agendamentoService: AgendamentoService,
    private visitaService: VisitaService
  ) {}

  ngOnInit(): void {
    this.carregarEstatisticas();
  }

  carregarEstatisticas(): void {
    this.loading = true;

    // Carregar estatísticas de assistidos
    this.assistidoService.listar({ page: 0, size: 1 }).subscribe({
      next: (response) => {
        this.stats.totalAssistidos = response.totalElements || 0;
        this.verificarCarregamentoCompleto();
      },
      error: (error) => {
        console.error('Erro ao carregar assistidos:', error);
        this.verificarCarregamentoCompleto();
      }
    });

    // Carregar assistidos ativos
    this.assistidoService.listar({ status: StatusAssistido.ATIVO, page: 0, size: 1 }).subscribe({
      next: (response) => {
        this.stats.assistidosAtivos = response.totalElements || 0;
        this.verificarCarregamentoCompleto();
      },
      error: (error) => {
        console.error('Erro ao carregar assistidos ativos:', error);
        this.verificarCarregamentoCompleto();
      }
    });

    // Carregar agendamentos de hoje
    const hoje = new Date();
    this.agendamentoService.listar({ 
      dataInicio: hoje, 
      dataFim: hoje, 
      page: 0, 
      size: 1 
    }).subscribe({
      next: (response) => {
        this.stats.agendamentosHoje = response.totalElements || 0;
        this.verificarCarregamentoCompleto();
      },
      error: (error) => {
        console.error('Erro ao carregar agendamentos:', error);
        this.verificarCarregamentoCompleto();
      }
    });

    // Carregar visitas pendentes
    this.visitaService.listar({ 
      status: StatusVisita.AGENDADA, 
      page: 0, 
      size: 1 
    }).subscribe({
      next: (response) => {
        this.stats.visitasPendentes = response.totalElements || 0;
        this.verificarCarregamentoCompleto();
      },
      error: (error) => {
        console.error('Erro ao carregar visitas:', error);
        this.verificarCarregamentoCompleto();
      }
    });
  }

  private verificarCarregamentoCompleto(): void {
    // Simular carregamento mínimo para melhor UX
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
