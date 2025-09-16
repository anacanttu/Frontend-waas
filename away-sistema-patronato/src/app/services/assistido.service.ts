import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assistido, AssistidoFiltro } from '../models/assistido.model';

@Injectable({
  providedIn: 'root'
})
export class AssistidoService {
  private readonly API_URL = 'http://localhost:8080/api/assistidos';

  constructor(private http: HttpClient) { }

  listar(filtro?: AssistidoFiltro): Observable<any> {
    let params = new HttpParams();
    
    if (filtro) {
      if (filtro.nome) params = params.set('nome', filtro.nome);
      if (filtro.cpf) params = params.set('cpf', filtro.cpf);
      if (filtro.numeroProcesso) params = params.set('numeroProcesso', filtro.numeroProcesso);
      if (filtro.status) params = params.set('status', filtro.status);
      if (filtro.tipoPena) params = params.set('tipoPena', filtro.tipoPena);
      if (filtro.page) params = params.set('page', filtro.page.toString());
      if (filtro.size) params = params.set('size', filtro.size.toString());
    }

    return this.http.get<any>(this.API_URL, { params });
  }

  buscarPorId(id: number): Observable<Assistido> {
    return this.http.get<Assistido>(`${this.API_URL}/${id}`);
  }

  criar(assistido: Assistido): Observable<Assistido> {
    return this.http.post<Assistido>(this.API_URL, assistido);
  }

  atualizar(id: number, assistido: Assistido): Observable<Assistido> {
    return this.http.put<Assistido>(`${this.API_URL}/${id}`, assistido);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  buscarPorCpf(cpf: string): Observable<Assistido> {
    return this.http.get<Assistido>(`${this.API_URL}/cpf/${cpf}`);
  }

  buscarPorNumeroProcesso(numeroProcesso: string): Observable<Assistido> {
    return this.http.get<Assistido>(`${this.API_URL}/processo/${numeroProcesso}`);
  }
}
