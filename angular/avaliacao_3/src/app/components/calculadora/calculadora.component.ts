import { Component, inject } from '@angular/core';
import { CalculadoraQuadradoService } from '../../service/calculadora-quadrado.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent{

  numero = 0
  resultado = 0

constructor(private calCalculadoraQuadradoService: CalculadoraQuadradoService){}

calcular(){
  this.resultado = this.calCalculadoraQuadradoService.calcularQadrado(this.numero)
}


}
