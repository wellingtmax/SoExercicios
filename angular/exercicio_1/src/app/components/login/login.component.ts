import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  mensagem: string = '';

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  enviar() {
    // if (this.form.valid) {
    //   const email = this.form.get('email')?.value;
    //   const senha = this.form.get('senha')?.value;
    //   if (this.loginService.login(email, senha)) {
    //     this.mensagem = 'Login bem-sucedido!';
    //     localStorage.setItem('token', 'usuario-logado');
    //     this.router.navigate(['/home']);
    //   } else {
    //     this.mensagem = 'Usuário ou senha inválidos!';
    //   }
    // } else {
    //   this.mensagem = 'Preencha todos os campos!';
    // }

    if(this.loginService.auth(this.form.value)){
      localStorage.setItem('token', '98dsd95632dsedw-sadwqe5845646');
      this.router.navigate(['/home']);
    }else{
      alert("Credenciais incorretas!!")
    }


  }
}
