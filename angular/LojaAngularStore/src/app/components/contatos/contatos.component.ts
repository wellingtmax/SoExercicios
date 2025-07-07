import { Component } from '@angular/core';

// Componente standalone para página de contato
@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent {
  
  // Informações de contato da loja
  contatos = {
    endereco: 'Rua das Academias, 123 - Centro, São Paulo - SP',
    telefone: '(11) 99999-9999',
    email: 'contato@lojaangularstore.com.br',
    horarioFuncionamento: 'Segunda a Sexta: 8h às 18h | Sábado: 8h às 14h'
  };
}
