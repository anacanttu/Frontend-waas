import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visita, VisitaFiltro } from '../models/visita.model';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {
  private readonly API_URL = 'http://localhost:8080/api/visitas';

  constructor(private http: HttpClient) { }

  listar(filtro?: VisitaFiltro): Observable<any> {
    let params = new HttpParams();
    
    if (filtro) {
      if (filtro.assistidoId) params = params.set('assistidoId', filtro.assistidoId.toString());
      if (filtro.dataInicio) params = params.set('dataInicio', filtro.dataInicio.toISOString());
      if (filtro.dataFim) params = params.set('dataFim', filtro.dataFim.toISOString());
      if (filtro.status) params = params.set('status', filtro.status);
      if (filtro.tipoVisita) params = params.set('tipoVisita', filtro.tipoVisita);
      if (filtro.page) params = params.set('page', filtro.page.toString());
      if (filtro.size) params = params.set('size', filtro.size.toString());
    }

    return this.http.get<any>(this.API_URL, { params });
  }

  buscarPorId(id: number): Observable<Visita> {
    return this.http.get<Visita>(`${this.API_URL}/${id}`);
  }

  criar(visita: Visita): Observable<Visita> {
    return this.http.post<Visita>(this.API_URL, visita);
  }

  atualizar(id: number, visita: Visita): Observable<Visita> {
    return this.http.put<Visita>(`${this.API_URL}/${id}`, visita);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  realizar(id: number, observacoes?: string): Observable<Visita> {
    return this.http.patch<Visita>(`${this.API_URL}/${id}/realizar`, { observacoes });
  }

  reagendar(id: number, novaData: Date, novaHoraInicio: string, novaHoraFim: string): Observable<Visita> {
    return this.http.patch<Visita>(`${this.API_URL}/${id}/reagendar`, {
      dataVisita: novaData,
      horaInicio: novaHoraInicio,
      horaFim: novaHoraFim
    });
  }
}
