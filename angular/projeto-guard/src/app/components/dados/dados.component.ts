import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dados',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})

export class DadosComponent implements OnInit{

  dados:any;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(resultado => {
      this.dados = resultado;
      console.log(resultado)
    })
  }

}
