import { Component } from '@angular/core';

// Componente standalone do rodapé
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // Ano atual para o copyright
  currentYear = new Date().getFullYear();
}
