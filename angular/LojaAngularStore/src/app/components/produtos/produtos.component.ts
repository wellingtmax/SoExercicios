import { Component, OnInit } from '@angular/core';
import { ProdutosServiceService } from '../../service/produtos-service.service';
import { CarrinhoService } from '../../service/carrinho.service';
import { Router } from '@angular/router';



// Componente standalone que exibe os produtos da loja

@Component({
  selector: 'app-produtos',
  imports: [],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent{

  private adicionandoCarrinho = false; // Flag para evitar cliques duplos

  constructor(
    public produtosServiceService: ProdutosServiceService,
    private carrinhoService: CarrinhoService,
    private router:Router
  ){}


  irParaProduto(produto:any){
    this.produtosServiceService.produtoSendoVisto = produto

    this.router.navigate(['vitrine'])
  }

  // Função para adicionar produto ao carrinho
  adicionarAoCarrinho(produto: any, event: Event) {
    // Evita que o clique no botão acione o click do card
    event.stopPropagation();

    // Proteção contra cliques múltiplos
    if (this.adicionandoCarrinho) {
      console.log('Aguarde, produto sendo adicionado...');
      return;
    }

    this.adicionandoCarrinho = true;

    try {
      this.carrinhoService.adicionarAoCarrinho(produto);
      console.log(`${produto.nome} adicionado ao carrinho!`);

      // Feedback visual opcional - você pode adicionar um toast aqui

    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
    } finally {
      // Libera o flag após 500ms para evitar cliques muito rápidos
      setTimeout(() => {
        this.adicionandoCarrinho = false;
      }, 500);
    }
  }


}
