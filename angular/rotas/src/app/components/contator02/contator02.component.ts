import { Component } from '@angular/core';

@Component({
  selector: 'app-contator02',
  imports: [],
  templateUrl: './contator02.component.html',
  styleUrl: './contator02.component.css'
})
export class Contator02Component {

valor = 0;

incrementar(){
  this.valor++;
  console.log('Contador incrementado:', this.valor);
}

decrementar(){
  this.valor--;
  console.log('Contador decrementado:', this.valor);
}

get cont(){

  return this.valor
}
  
}
