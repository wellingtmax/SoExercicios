import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraQuadradoService {


  constructor() { }


  calcularQadrado(lado: number): number{
  return lado * lado
}

}
