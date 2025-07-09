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

  private adicionandoCarrinho = false; // Flag para evitar cliques duplos

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
    // Proteção contra cliques múltiplos
    if (this.adicionandoCarrinho) {
      console.log('Aguarde, produto sendo adicionado...');
      return;
    }

    this.adicionandoCarrinho = true;

    try {
      const produto = this.produtosServiceService.produtoSendoVisto;
      this.carrinhoService.adicionarAoCarrinho(produto);
      console.log(`${produto.nome} adicionado ao carrinho!`);

      // Opcional: Mostrar feedback visual ou redirecionar

    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
    } finally {
      // Libera o flag após 500ms
      setTimeout(() => {
        this.adicionandoCarrinho = false;
      }, 500);
    }
  }
}
