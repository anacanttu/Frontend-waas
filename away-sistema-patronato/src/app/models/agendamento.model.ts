export interface Agendamento {
  id?: number;
  assistidoId: number;
  assistido?: Assistido;
  dataAgendamento: Date;
  horaInicio: string;
  horaFim: string;
  tipoAtividade: TipoAtividade;
  status: StatusAgendamento;
  observacoes?: string;
  dataCriacao: Date;
  dataUltimaAtualizacao?: Date;
}

export enum TipoAtividade {
  ORIENTACAO = 'ORIENTACAO',
  TRABALHO = 'TRABALHO',
  EDUCACAO = 'EDUCACAO',
  SAUDE = 'SAUDE',
  OUTROS = 'OUTROS'
}

export enum StatusAgendamento {
  AGENDADO = 'AGENDADO',
  CONFIRMADO = 'CONFIRMADO',
  REALIZADO = 'REALIZADO',
  CANCELADO = 'CANCELADO',
  FALTA = 'FALTA'
}

export interface AgendamentoFiltro {
  assistidoId?: number;
  dataInicio?: Date;
  dataFim?: Date;
  status?: StatusAgendamento;
  tipoAtividade?: TipoAtividade;
  page?: number;
  size?: number;
}

import { Assistido } from './assistido.model';
