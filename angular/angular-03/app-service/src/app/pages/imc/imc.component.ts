import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImcService } from '../../services/imc.service';



@Component({
  selector: 'app-imc',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})

export class ImcComponent {

  peso:number = 0
  altura:number = 0
  resultado:number = 0

  constructor(private imcService: ImcService){}

  calcular(){
    this.resultado = this.imcService.calcularImc(this.peso, this.altura)
  }

}
