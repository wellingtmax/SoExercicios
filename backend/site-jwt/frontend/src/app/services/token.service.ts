import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly TOKEN_KEY = 'auth_token';

  constructor() { }

  // Salvar token
  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Obter token
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Remover token
  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // Verificar se token existe
  hasToken(): boolean {
    return !!this.getToken();
  }

  // Decodificar token
  decodeToken(): any {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode(token);
      } catch (error) {
        console.error('Erro ao decodificar token:', error);
        return null;
      }
    }
    return null;
  }

  // Verificar se token está válido
  isTokenValid(): boolean {
    const decodedToken = this.decodeToken();
    if (!decodedToken) return false;

    const currentTime = Date.now() / 1000;
    return decodedToken.exp > currentTime;
  }

  // Obter dados do usuário do token
  getUserFromToken(): any {
    const decoded = this.decodeToken();
    return decoded ? {
      userId: decoded.userId,
      perfil: decoded.perfil
    } : null;
  }
}
