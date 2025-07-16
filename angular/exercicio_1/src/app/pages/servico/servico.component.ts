import { Component, OnInit } from '@angular/core';
import { Produto, ProdutosService } from '../../service/produtos.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-servico',
  imports: [CommonModule],
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.produtos = this.produtosService.getProdutos();
    console.log(this.produtos)
  }
}
