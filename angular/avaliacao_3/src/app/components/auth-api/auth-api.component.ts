import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthApiService } from '../../service/auth-api.service';


@Component({
  selector: 'app-auth-api',
  imports: [],
  templateUrl: './auth-api.component.html',
  styleUrl: './auth-api.component.css'
})
export class AuthApiComponent implements OnInit{
  usuarios: any[] = []

  constructor(private authApiService: AuthApiService){}

  ngOnInit(): void {
    this.authApiService.getUsuarios().subscribe((dados) => {
      this.usuarios = dados;
    });

}
