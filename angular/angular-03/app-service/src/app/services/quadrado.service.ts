import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuadradoService {

  constructor() { }

  calcularQuadrado(valor:number):number{
    return valor * valor
  }
}
