import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuadradoService } from '../../services/quadrado.service';

@Component({
  selector: 'app-quadrado',
  imports: [CommonModule, FormsModule],
  templateUrl: './quadrado.component.html',
  styleUrl: './quadrado.component.css'
})
export class QuadradoComponent {

    valor:number = 0
    resultado:number = 0
  
    constructor(private quadradoService: QuadradoService){}
  
    calcular(){
      this.resultado = this.quadradoService.calcularQuadrado(this.valor)
    }
}
