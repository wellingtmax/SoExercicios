import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dodos2',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dodos2.component.html',
  styleUrl: './dodos2.component.css'
})
export class Dodos2Component implements OnInit {

  usuario: any[] = [];

  constructor(private http: ApiService) {}

  ngOnInit(): void {
    this.http.getUsuario().subscribe(dados => {
      this.usuario = dados.map(usuarios => usuarios.usuario);
    });
  }
}
