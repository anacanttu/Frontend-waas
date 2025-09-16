export interface Assistido {
  id?: number;
  nome: string;
  cpf: string;
  numeroProcesso: string;
  tipoPena: TipoPena;
  status: StatusAssistido;
  dataNascimento: Date;
  endereco: string;
  telefone: string;
  email?: string;
  observacoes?: string;
  dataCadastro: Date;
  dataUltimaAtualizacao?: Date;
}

export enum TipoPena {
  ALTERNATIVA = 'ALTERNATIVA',
  PRISIONAL = 'PRISIONAL'
}

export enum StatusAssistido {
  ATIVO = 'ATIVO',
  EM_MONITORAMENTO = 'EM_MONITORAMENTO',
  DESLIGADO = 'DESLIGADO'
}

export interface AssistidoFiltro {
  nome?: string;
  cpf?: string;
  numeroProcesso?: string;
  status?: StatusAssistido;
  tipoPena?: TipoPena;
  page?: number;
  size?: number;
}
