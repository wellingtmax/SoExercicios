import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProdutosServiceService {

  constructor() { }

  minhavariavel = 'dentro de service';

  produtoSendoVisto:any = null

  // Array com os produtos da loja de musculação
  produtos = [
    {
      nome: 'Halter 5kg',
      descricao: 'Halter para musculação de 5kg revestido em borracha.',
      imagem: 'imagens/halter5kg.jpg',
      preco: 'R$ 89,90',
      promocao: "3 por 1"
    },
    {
      nome: 'Caneleira 3kg',
      descricao: 'Caneleira com peso ajustável para treino de pernas.',
      imagem: 'imagens/caneleira3kg.jpg',
      preco: 'R$ 59,90',
       promocao: "3 por 1"
    },
    {
      nome: 'Colchonete',
      descricao: 'Colchonete para exercícios abdominais e alongamento.',
      imagem: 'imagens/colchonete.jpg',
      preco: 'R$ 39,90',
       promocao: "2 por 1"
    },
    {
      nome: 'Barra W',
      descricao: 'Barra em W para bíceps e tríceps em aço resistente.',
      imagem: 'imagens/barra-w.jpg',
      preco: 'R$ 129,90',
       promocao: "40%"
    },
    {
      nome: 'Kettlebell 8kg',
      descricao: 'Kettlebell em ferro fundido para treino funcional.',
      imagem: 'imagens/kettlebell8kg.jpg',
      preco: 'R$ 79,90',
       promocao: "2 por 1"
    },
    {
      nome: 'Faixa Elástica',
      descricao: 'Faixa para treino de resistência com diferentes intensidades.',
      imagem: 'imagens/faixa-elastica.jpg',
      preco: 'R$ 29,90',
       promocao: "10%"
    },
  ];
}
