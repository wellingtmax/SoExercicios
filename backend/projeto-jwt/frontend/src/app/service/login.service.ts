import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

export interface LoginResponse {
  token: string;
  role: 'admin' | 'adm' | 'user';
}

export interface User {
  id: number;
  login: string;
  role: 'admin' | 'adm' | 'user';
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3015/api/auth';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    // Verificar se há um token salvo no localStorage
    this.checkStoredToken();
  }

  login(login: string, senha: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { login, senha });
  }

  setToken(token: string, role: 'admin' | 'adm' | 'user'): void {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);

    // Decodificar o token para obter dados do usuário
    const payload = this.decodeToken(token);
    if (payload) {
      this.currentUserSubject.next(payload);
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    console.log('LoginService - Verificando se está logado. Token:', token ? 'existe' : 'não existe');

    if (!token) {
      console.log('LoginService - Sem token, não está logado');
      return false;
    }

    // Verificar se o token não expirou
    try {
      const payload = this.decodeToken(token);
      if (!payload) {
        console.log('LoginService - Token inválido, não conseguiu decodificar');
        return false;
      }

      const currentTime = Math.floor(Date.now() / 1000);
      const isValid = payload.exp > currentTime;
      console.log('LoginService - Token válido:', isValid, 'Exp:', payload.exp, 'Now:', currentTime);
      return isValid;
    } catch (error) {
      console.error('LoginService - Erro ao verificar token:', error);
      return false;
    }
  }

  isAdmin(): boolean {
    const role = this.getRole();
    const isLoggedIn = this.isLoggedIn();
    // Aceita tanto 'admin' quanto 'adm' para compatibilidade com o backend
    const result = (role === 'admin' || role === 'adm') && isLoggedIn;
    console.log('LoginService - isAdmin(): role =', role, ', isLoggedIn =', isLoggedIn, ', result =', result);
    return result;
  }

  isUser(): boolean {
    const role = this.getRole();
    const isLoggedIn = this.isLoggedIn();
    const result = role === 'user' && isLoggedIn;
    console.log('LoginService - isUser(): role =', role, ', isLoggedIn =', isLoggedIn, ', result =', result);
    return result;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  private checkStoredToken(): void {
    const token = this.getToken();
    if (token && this.isLoggedIn()) {
      const payload = this.decodeToken(token);
      if (payload) {
        this.currentUserSubject.next(payload);
      }
    }
  }

  private decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch {
      return null;
    }
  }
}
