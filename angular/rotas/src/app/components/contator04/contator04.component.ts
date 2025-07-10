import { Component } from '@angular/core';
import { ContatorService } from '../../service/contator.service';

@Component({
  selector: 'app-contator04',
  imports: [],
  templateUrl: './contator04.component.html',
  styleUrl: './contator04.component.css'
})


export class Contator04Component {

  

  constructor (private contService: ContatorService){}


    getValor(): number{
      return this.contService.valor()
    }

    incrementar(){
     return this.contService.incrementar()
    }

    decrementar(){
      return this.contService.decrementar()
    }

    zerar(){
      this.contService.zerar()
    }
 
}
