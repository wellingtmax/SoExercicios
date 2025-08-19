import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';

interface LoginData {
  usuario: string;
  senha: string;
}

interface RegisterData {
  usuario: string;
  senha: string;
  perfil: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: number;
    usuario: string;
    perfil: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
    // Verificar se já está logado ao inicializar
    this.checkAuthStatus();
  }

  // Registrar usuário
  register(data: RegisterData): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  // Fazer login
  login(data: LoginData): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, data).pipe(
      tap(response => {
        this.tokenService.setToken(response.token);
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

  // Fazer logout
  logout(): void {
    this.tokenService.removeToken();
    this.isAuthenticatedSubject.next(false);
  }

  // Verificar se está autenticado
  isAuthenticated(): boolean {
    return this.tokenService.hasToken() && this.tokenService.isTokenValid();
  }

  // Obter dados do usuário
  getCurrentUser(): any {
    return this.tokenService.getUserFromToken();
  }

  // Verificar status de autenticação
  private checkAuthStatus(): void {
    const isAuth = this.isAuthenticated();
    this.isAuthenticatedSubject.next(isAuth);
  }

  // Testar rota protegida
  getProtectedData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/protected`);
  }

  // Obter perfil do usuário
  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`);
  }
}
