export interface Usuario {
  id?: number;
  nome: string;
  email: string;
  senha?: string;
  perfil: PerfilUsuario;
  ativo: boolean;
  dataCriacao: Date;
  dataUltimaAtualizacao?: Date;
}

export enum PerfilUsuario {
  ADMINISTRADOR = 'ADMINISTRADOR',
  SUPERVISOR = 'SUPERVISOR',
  AGENTE = 'AGENTE'
}

export interface LoginRequest {
  email: string;
  senha: string;
}

export interface LoginResponse {
  token: string;
  usuario: Usuario;
  expiresIn: number;
}
