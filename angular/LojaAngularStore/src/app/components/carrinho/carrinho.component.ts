import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarrinhoService, ItemCarrinho } from '../../service/carrinho.service';
import { Subscription } from 'rxjs';

// Componente standalone para exibir e gerenciar carrinho
@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit, OnDestroy {

  itensCarrinho: ItemCarrinho[] = [];
  valorTotal: number = 0;
  quantidadeTotal: number = 0;
  private carrinhoSubscription?: Subscription;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    // Inscrever-se nas mudanças do carrinho
    this.carrinhoSubscription = this.carrinhoService.carrinho$.subscribe(itens => {
      this.itensCarrinho = itens;
      this.valorTotal = this.carrinhoService.obterValorTotal();
      this.quantidadeTotal = this.carrinhoService.obterQuantidadeTotal();
    });
  }

  ngOnDestroy() {
    // Cancelar inscrição para evitar memory leaks
    if (this.carrinhoSubscription) {
      this.carrinhoSubscription.unsubscribe();
    }
  }

  // Aumentar quantidade de um item
  aumentarQuantidade(item: ItemCarrinho) {
    this.carrinhoService.aumentarQuantidade(item);
  }

  // Diminuir quantidade de um item
  diminuirQuantidade(item: ItemCarrinho) {
    this.carrinhoService.diminuirQuantidade(item);
  }

  // Remover item do carrinho
  removerItem(item: ItemCarrinho) {
    this.carrinhoService.removerDoCarrinho(item);
  }

  // Limpar todo o carrinho
  limparCarrinho() {
    this.carrinhoService.limparCarrinho();
  }

  // Verificar se carrinho está vazio
  get carrinhoVazio(): boolean {
    return this.carrinhoService.estaVazio();
  }

  // Finalizar compra (placeholder)
  finalizarCompra() {
    alert('Funcionalidade de pagamento será implementada em breve!');
  }

  // Formatar preço para exibição
  formatarPreco(valor: number): string {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
  }
}

