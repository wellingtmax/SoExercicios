import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private autenticado = false

  constructor() {
    // Verifica se já existe autenticação no localStorage
    this.autenticado = localStorage.getItem('autenticado') === 'true';
  }

  login(usuario: string, senha: string):boolean {
    if (usuario === 'J.Oliveira' && senha === '123'){
      this.autenticado = true
      localStorage.setItem('autenticado', 'true'); // Persiste no localStorage
      return true
    }
    return false
  }

  isAutenticado():boolean{
    return this.autenticado
  }

  logout(): void {
    this.autenticado = false;
    localStorage.removeItem('autenticado'); // Remove do localStorage
  }

}
