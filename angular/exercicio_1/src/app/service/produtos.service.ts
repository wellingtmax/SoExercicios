import { Injectable } from '@angular/core';

export interface Produto {
  nome: string;
  descricao: string;
  valor: number;
  imagem:string
}
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  private produtos: Produto[] = [
    {
      nome: 'Notebook Dell Inspiron',
      descricao: 'Notebook com processador Intel Core i5, 8GB RAM, 256GB SSD.',
      valor: 3500,
      imagem: 'https://patoloco.com.br/arquivos/produtos/imagens_adicionais/bdd2981d81e378e083975eca8edd38ed6864c51b.jpeg'
    },
    {
      nome: 'Smartphone Samsung Galaxy S21',
      descricao: 'Smartphone com tela de 6.2", 128GB, câmera tripla.',
      valor: 4200,
      imagem: 'https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-s21-128gb-preto-5g-8gb-ram-tela-67-cam-tripla-selfie-10mp/magazineluiza/155619500/3f07b58eb3439a4e68d100b8c4e3d1bb.jpg'
    },
    {
      nome: 'Fone de Ouvido JBL',
      descricao: 'Fone Bluetooth com cancelamento de ruído, bateria de longa duração.',
      valor: 600,
      imagem: 'https://fastshopbr.vtexassets.com/arquivos/ids/495369/0_JBLT520BTAZL_PRD_1500_1.jpg?v=638617860190670000'
    },
    {
      nome: 'Monitor LG 24"',
      descricao: 'Monitor LED Full HD, 24 polegadas, HDMI e VGA.',
      valor: 900,
      imagem: 'https://i.zst.com.br/thumbs/12/9/35/21742678.jpg'
    },
    {
      nome: 'Mouse Logitech MX Master 3',
      descricao: 'Mouse sem fio ergonômico, recarregável, alta precisão.',
      valor: 450,
      imagem: 'https://cdn.awsli.com.br/2500x2500/1945/1945186/produto/314934963/1-s4grsza556.png'
    },
    {
      nome: 'Teclado Mecânico Redragon',
      descricao: 'Teclado mecânico RGB, switches Outemu Blue.',
      valor: 350,
      imagem: 'https://img.terabyteshop.com.br/produto/g/teclado-mecanico-gamer-redragon-kumara-switch-blue-rgb-abnt2-pinkwhite-k552pw-rgb-pt-blue_163712.jpg'
    }
  ]

  // Retorna todos os produtos
  getProdutos(): Produto[] {
    return this.produtos;
  }

  // Busca um produto pelo nome (case insensitive)
  getProdutoPorNome(nome: string): Produto | undefined {
    return this.produtos.find(produto => produto.nome.toLowerCase() === nome.toLowerCase());
  }
}
