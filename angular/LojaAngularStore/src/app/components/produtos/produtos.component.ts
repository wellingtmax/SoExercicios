import { Component, OnInit } from '@angular/core';
import { ProdutosServiceService } from '../../service/produtos-service.service';



// Componente standalone que exibe os produtos da loja

@Component({
  selector: 'app-produtos',
  standalone: true,
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit{
  
  constructor(public produtosServiceService: ProdutosServiceService){}



  ngOnInit(): void {}

  
}
