import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componente standalone para exibir redes sociais
@Component({
  selector: 'app-redes-sociais',
  standalone: true,
  imports: [CommonModule], // Adiciona CommonModule para usar *ngFor
  templateUrl: './redes-sociais.component.html',
  styleUrl: './redes-sociais.component.css'
})
export class RedesSociaisComponent {
  
  // Array com as redes sociais da loja
  redesSociais = [
    {
      nome: 'Facebook',
      url: 'https://facebook.com/lojaangularstore',
      icon: 'bi bi-facebook'
    },
    {
      nome: 'Instagram',
      url: 'https://instagram.com/lojaangularstore',
      icon: 'bi bi-instagram'
    },
    {
      nome: 'Twitter',
      url: 'https://twitter.com/lojaangularstore',
      icon: 'bi bi-twitter'
    },
    {
      nome: 'YouTube',
      url: 'https://youtube.com/lojaangularstore',
      icon: 'bi bi-youtube'
    }
  ];
}
