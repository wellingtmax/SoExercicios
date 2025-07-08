import { Component } from '@angular/core';


@Component({
  selector: 'app-contator01',
  imports: [],
  templateUrl: './contator01.component.html',
  styleUrl: './contator01.component.css'
})
export class Contator01Component {


  contador = 0
  addContador(){
    this.contador += 1
    console.log(this.contador)
  }
}
