import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginRequest, LoginResponse, Usuario, PerfilUsuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8080/api/auth';
  private currentUserSubject = new BehaviorSubject<Usuario | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadUserFromStorage();
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    // Para demonstração, simular login bem-sucedido
    const mockResponse: LoginResponse = {
      token: 'mock-jwt-token',
      usuario: {
        id: 1,
        nome: 'Administrador',
        email: loginRequest.email,
        perfil: PerfilUsuario.ADMINISTRADOR,
        ativo: true,
        dataCriacao: new Date(),
        dataUltimaAtualizacao: new Date()
      },
      expiresIn: 3600
    };

    return new Observable(observer => {
      setTimeout(() => {
        localStorage.setItem('token', mockResponse.token);
        localStorage.setItem('user', JSON.stringify(mockResponse.usuario));
        this.currentUserSubject.next(mockResponse.usuario);
        observer.next(mockResponse);
        observer.complete();
      }, 1000);
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getCurrentUser(): Usuario | null {
    return this.currentUserSubject.value;
  }

  private loadUserFromStorage(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.currentUserSubject.next(JSON.parse(user));
    }
  }
}
