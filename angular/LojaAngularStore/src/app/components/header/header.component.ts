import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Componente do cabeçalho da aplicação
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // Importa RouterLink e RouterLinkActive para navegação
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Este componente não precisa de lógica adicional
  // Apenas renderiza o menu de navegação
}
