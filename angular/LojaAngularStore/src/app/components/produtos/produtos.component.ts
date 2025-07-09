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

    this.carrinhoService.adicionarAoCarrinho(produto);

    // Opcional: Mostrar feedback visual
    console.log(`${produto.nome} adicionado ao carrinho!`);
  }


}
