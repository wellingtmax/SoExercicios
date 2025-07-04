import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  imports: [CommonModule, FormsModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  fotos = [
    {
      id: 1,
      nome: 'joão',
      imagem: '',
    },
     {
      id: 2,
      nome: 'joão',
      imagem: '',
    },
     {
      id: 3,
      nome: 'joão',
      imagem: '',
    },
     {
      id: 4,
      nome: 'joão',
      imagem: '',
    },
     {
      id: 5,
      nome: 'joão',
      imagem: '',
    },
     {
      id: 6,
      nome: 'joão',
      imagem: '',
    },
   
  ]
}
