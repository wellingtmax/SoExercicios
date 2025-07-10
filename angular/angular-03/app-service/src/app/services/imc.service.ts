import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImcService {

  constructor() { }

  calcularImc(peso:number, altura:number){
    return peso / (altura * altura)
  }
}
