import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CarrinhoService } from '../../service/carrinho.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

// Componente do cabeçalho da aplicação
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule], // Importa RouterLink e RouterLinkActive para navegação
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {

  // Propriedades para o carrinho
  quantidadeItensCarrinho = 0;
  private carrinhoSubscription: Subscription = new Subscription();

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    // Inscrever-se nas mudanças do carrinho
    this.carrinhoSubscription = this.carrinhoService.carrinho$.subscribe(itens => {
      this.quantidadeItensCarrinho = this.carrinhoService.obterQuantidadeTotal();
    });
  }

  ngOnDestroy() {
    // Limpar subscription
    if (this.carrinhoSubscription) {
      this.carrinhoSubscription.unsubscribe();
    }
  }
}
