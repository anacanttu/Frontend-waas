import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agendamento, AgendamentoFiltro } from '../models/agendamento.model';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private readonly API_URL = 'http://localhost:8080/api/agendamentos';

  constructor(private http: HttpClient) { }

  listar(filtro?: AgendamentoFiltro): Observable<any> {
    let params = new HttpParams();
    
    if (filtro) {
      if (filtro.assistidoId) params = params.set('assistidoId', filtro.assistidoId.toString());
      if (filtro.dataInicio) params = params.set('dataInicio', filtro.dataInicio.toISOString());
      if (filtro.dataFim) params = params.set('dataFim', filtro.dataFim.toISOString());
      if (filtro.status) params = params.set('status', filtro.status);
      if (filtro.tipoAtividade) params = params.set('tipoAtividade', filtro.tipoAtividade);
      if (filtro.page) params = params.set('page', filtro.page.toString());
      if (filtro.size) params = params.set('size', filtro.size.toString());
    }

    return this.http.get<any>(this.API_URL, { params });
  }

  buscarPorId(id: number): Observable<Agendamento> {
    return this.http.get<Agendamento>(`${this.API_URL}/${id}`);
  }

  criar(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(this.API_URL, agendamento);
  }

  atualizar(id: number, agendamento: Agendamento): Observable<Agendamento> {
    return this.http.put<Agendamento>(`${this.API_URL}/${id}`, agendamento);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  confirmar(id: number): Observable<Agendamento> {
    return this.http.patch<Agendamento>(`${this.API_URL}/${id}/confirmar`, {});
  }

  cancelar(id: number, motivo?: string): Observable<Agendamento> {
    return this.http.patch<Agendamento>(`${this.API_URL}/${id}/cancelar`, { motivo });
  }
}
