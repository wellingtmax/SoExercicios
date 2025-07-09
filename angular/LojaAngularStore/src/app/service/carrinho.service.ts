import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Interface para item do carrinho
export interface ItemCarrinho {
  id?: number;
  nome: string;
  preco: string;
  imagem: string;
  descricao: string;
  quantidade: number;
  precoNumerico: number; // Para cálculos
}

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  // Array para armazenar itens do carrinho
  private itensCarrinho: ItemCarrinho[] = [];

  // Subject para notificar mudanças no carrinho
  private carrinhoSubject = new BehaviorSubject<ItemCarrinho[]>([]);

  // Observable público para componentes se inscreverem
  public carrinho$ = this.carrinhoSubject.asObservable();

  constructor() {
    // Carregar carrinho do localStorage se existir
    this.carregarCarrinho();
  }

  // Adicionar produto ao carrinho
  adicionarAoCarrinho(produto: any) {
    if (!produto || !produto.nome) {
      console.error('Produto inválido para adicionar ao carrinho');
      return;
    }

    console.log('Adicionando produto ao carrinho:', produto.nome);

    const precoNumerico = this.extrairPrecoNumerico(produto.preco);
    console.log('Preço extraído:', precoNumerico);

    // Verificar se produto já existe no carrinho
    const itemExistente = this.itensCarrinho.find(item => item.nome === produto.nome);

    if (itemExistente) {
      // Se existe, aumentar quantidade em 1
      itemExistente.quantidade += 1;
      console.log(`Quantidade aumentada para ${itemExistente.quantidade}`);
    } else {
      // Se não existe, adicionar novo item com quantidade 1
      const novoItem: ItemCarrinho = {
        nome: produto.nome,
        preco: produto.preco,
        imagem: produto.imagem,
        descricao: produto.descricao,
        quantidade: 1, // Sempre adiciona 1
        precoNumerico: precoNumerico
      };
      this.itensCarrinho.push(novoItem);
      console.log('Novo item adicionado:', novoItem);
    }

    this.atualizarCarrinho();
    console.log('Carrinho atualizado. Total de itens:', this.obterQuantidadeTotal());
  }

  // Remover produto do carrinho
  removerDoCarrinho(produto: ItemCarrinho) {
    const index = this.itensCarrinho.findIndex(item => item.nome === produto.nome);
    if (index > -1) {
      this.itensCarrinho.splice(index, 1);
      this.atualizarCarrinho();
    }
  }

  // Diminuir quantidade do produto
  diminuirQuantidade(produto: ItemCarrinho) {
    const item = this.itensCarrinho.find(item => item.nome === produto.nome);
    if (item && item.quantidade > 1) {
      item.quantidade -= 1;
      this.atualizarCarrinho();
    } else if (item && item.quantidade === 1) {
      this.removerDoCarrinho(produto);
    }
  }

  // Aumentar quantidade do produto
  aumentarQuantidade(produto: ItemCarrinho) {
    const item = this.itensCarrinho.find(item => item.nome === produto.nome);
    if (item) {
      item.quantidade += 1;
      this.atualizarCarrinho();
    }
  }

  // Limpar carrinho
  limparCarrinho() {
    this.itensCarrinho = [];
    this.atualizarCarrinho();
  }

  // Método para limpar carrinho (debug)
  limparCarrinhoCompletamente() {
    this.itensCarrinho = [];
    localStorage.removeItem('carrinho');
    this.carrinhoSubject.next([]);
    console.log('Carrinho limpo completamente');
  }

  // Obter itens do carrinho
  obterItens(): ItemCarrinho[] {
    return this.itensCarrinho;
  }

  // Obter quantidade total de itens
  obterQuantidadeTotal(): number {
    return this.itensCarrinho.reduce((total, item) => total + item.quantidade, 0);
  }

  // Obter valor total do carrinho
  obterValorTotal(): number {
    return this.itensCarrinho.reduce((total, item) =>
      total + (item.precoNumerico * item.quantidade), 0
    );
  }

  // Verificar se carrinho está vazio
  estaVazio(): boolean {
    return this.itensCarrinho.length === 0;
  }

  // Atualizar carrinho e notificar componentes
  private atualizarCarrinho() {
    this.salvarCarrinho();
    this.carrinhoSubject.next([...this.itensCarrinho]);
  }

  // Salvar carrinho no localStorage
  private salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(this.itensCarrinho));
  }

  // Carregar carrinho do localStorage
  private carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      this.itensCarrinho = JSON.parse(carrinhoSalvo);
      this.carrinhoSubject.next([...this.itensCarrinho]);
    }
  }

  // Extrair preço numérico da string (ex: "R$ 89,90" -> 89.90)
  private extrairPrecoNumerico(precoString: string): number {
    if (!precoString) return 0;

    // Remove R$, espaços e converte vírgula para ponto
    const numeroLimpo = precoString
      .replace(/R\$?\s*/g, '')  // Remove R$ e espaços
      .replace(',', '.');       // Converte vírgula para ponto

    const numero = parseFloat(numeroLimpo);
    return isNaN(numero) ? 0 : numero;
  }
}
