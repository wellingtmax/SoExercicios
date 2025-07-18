import { Component, inject, OnInit } from '@angular/core';
import { ProdutoServiceService } from '../../services/produto.service.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Produtos } from '../../interfaces/produtos';

@Component({
  selector: 'app-produto-lista',
  imports: [ CommonModule, RouterModule],
  templateUrl: './produto-lista.component.html',
  styleUrl: './produto-lista.component.css'
})



export class ProdutoListaComponent implements OnInit{


  produto: Produtos[] = []

  constructor(private produtosService: ProdutoServiceService, private router: Router){}

  ngOnInit(): void {



  }

  carregarProdutos(){
    this.produtosService.lsitar().subscribe((x: Produtos) => {
      console.log(this.produto)
      return this.produto = [x]

    })
  }

  esditar(id:number){
    this.router.navigate(['/editar', id])
  }

  excluir(id: number){
    this.produtosService.excluir(id).subscribe(() => {
      this.carregarProdutos()
    })
  }

  novo(){
    this.router.navigate(['/novo'])
  }

}
