import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService, Usuario } from '../../services/usuario.service';


@Component({
  selector: 'app-usuarios',
  imports: [CommonModule,  FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuario: Usuario = {nome: '', email: ''};
  editando = false;
  idEdicao = 0;

  constructor(private service: UsuarioService){};

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.service.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        console.log('Usuários carregados:', data);
      },
      error: (error) => {
        console.error('Erro ao carregar usuários:', error);
        alert('Erro ao carregar usuários!');
      }
    });
  }

  salvar(){
    if (!this.editando) {
      // Adicionar novo usuário
      this.service.postAdicionar(this.usuario).subscribe({
        next: (data) => {
          console.log('Usuário adicionado:', data);
          this.listar();
          this.limpar();
          alert('Usuário adicionado com sucesso!');
        },
        error: (error) => {
          console.error('Erro ao adicionar usuário:', error);
          alert('Erro ao adicionar usuário!');
        }
      });
    } else {
      // Atualizar usuário existente
      this.service.putAtualizar(this.idEdicao, this.usuario).subscribe({
        next: (data) => {
          console.log('Usuário atualizado:', data);
          this.listar();
          this.limpar();
          alert('Usuário atualizado com sucesso!');
        },
        error: (error) => {
          console.error('Erro ao atualizar usuário:', error);
          alert('Erro ao atualizar usuário!');
        }
      });
    }
  }

  editar(usuario: Usuario){
    this.usuario = { ...usuario };
    this.editando = true;
    this.idEdicao = usuario.id || 0;
  }

  excluir(id: number){
    if (confirm('Deseja realmente excluir este usuário?')) {
      this.service.delDeletar(id).subscribe({
        next: () => {
          this.listar();
          alert('Usuário excluído com sucesso!');
        },
        error: (error) => {
          console.error('Erro ao excluir usuário:', error);
          alert('Erro ao excluir usuário!');
        }
      });
    }
  }

  limpar(){
    this.usuario = {nome: '', email: ''};
    this.editando = false;
    this.idEdicao = 0;
  }
}
