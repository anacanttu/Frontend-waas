export interface Visita {
  id?: number;
  assistidoId: number;
  assistido?: Assistido;
  dataVisita: Date;
  horaInicio: string;
  horaFim: string;
  tipoVisita: TipoVisita;
  status: StatusVisita;
  observacoes?: string;
  responsavelVisita: string;
  dataCriacao: Date;
  dataUltimaAtualizacao?: Date;
}

export enum TipoVisita {
  DOMICILIAR = 'DOMICILIAR',
  INSTITUCIONAL = 'INSTITUCIONAL',
  URGENTE = 'URGENTE'
}

export enum StatusVisita {
  AGENDADA = 'AGENDADA',
  REALIZADA = 'REALIZADA',
  CANCELADA = 'CANCELADA',
  REAGENDADA = 'REAGENDADA'
}

export interface VisitaFiltro {
  assistidoId?: number;
  dataInicio?: Date;
  dataFim?: Date;
  status?: StatusVisita;
  tipoVisita?: TipoVisita;
  page?: number;
  size?: number;
}

import { Assistido } from './assistido.model';
