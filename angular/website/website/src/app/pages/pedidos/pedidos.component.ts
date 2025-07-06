import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Produto{
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: string;
  promocaoAtiva: boolean;
}

@Component({
  selector: 'app-pedidos',
  imports: [CommonModule, FormsModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Smartphone Galaxy S24',
      descricao: 'Smartphone premium com câmera de alta qualidade e performance excepcional.',
      preco: 2499.99,
      imagem: '/asset/img/SmartphoneGalaxyS24.jpg',
      categoria: 'eletronicos',
      promocaoAtiva: true
    },
    {
      id: 2,
      nome: 'Notebook Dell Inspiron',
      descricao: 'Notebook para trabalho e estudos com processador Intel Core i5.',
      preco: 3299.99,
      imagem: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=250&fit=crop',
      categoria: 'eletronicos',
      promocaoAtiva: false
    },
    {
      id: 3,
      nome: 'Camiseta Básica',
      descricao: 'Camiseta 100% algodão, confortável e versátil para o dia a dia.',
      preco: 49.99,
      imagem: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=250&fit=crop',
      categoria: 'roupas',
      promocaoAtiva: true
    },
    {
      id: 4,
      nome: 'Sofá 3 Lugares',
      descricao: 'Sofá confortável e elegante para sua sala de estar.',
      preco: 1899.99,
      imagem: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=250&fit=crop',
      categoria: 'casa',
      promocaoAtiva: true
    },
    {
      id: 5,
      imagem: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=250&fit=crop',
      nome: 'Tênis de Corrida',
      preco: 299.99,
      descricao: 'Tênis esportivo com tecnologia de amortecimento avançada.',
      categoria: 'esportes',
      promocaoAtiva: false
    },
    {
      id: 6,
      nome: 'Fones Bluetooth',
      descricao: 'Fones de ouvido sem fio com cancelamento de ruído.',
      preco: 199.99,
      imagem: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=250&fit=crop',
      categoria: 'eletronicos',
      promocaoAtiva: true
    }
  ];

}
