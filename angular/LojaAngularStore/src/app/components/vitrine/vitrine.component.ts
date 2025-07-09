import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosServiceService } from '../../service/produtos-service.service';
import { CarrinhoService } from '../../service/carrinho.service';

// Componente standalone para exibir produto em vitrine
@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {

  constructor(
    public produtosServiceService: ProdutosServiceService,
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  // Função para voltar à página de produtos
  voltarParaProdutos() {
    this.router.navigate(['/']);
  }

  // Função para adicionar produto ao carrinho
  adicionarAoCarrinho() {
    const produto = this.produtosServiceService.produtoSendoVisto;
    this.carrinhoService.adicionarAoCarrinho(produto);

    // Opcional: Mostrar feedback visual ou redirecionar
    console.log(`${produto.nome} adicionado ao carrinho!`);
  }
}
