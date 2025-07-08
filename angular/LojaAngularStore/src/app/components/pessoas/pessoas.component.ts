import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../service/clientes.service';

@Component({
  selector: 'app-pessoas',
  imports: [],
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.css'
})
export class PessoasComponent implements OnInit{

  
  constructor(public pessoas: ClientesService){}

  ngOnInit(): void {}
}
