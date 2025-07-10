import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatorService {

  constructor() { }

  private valor = 0

  get Valor(): number{
    return this.valor
  }

  incrementar(){
    this.valor++
  }

  decrementar(){
    this.valor--
  }

  zerar(){
    this.valor = 0
  }
}
