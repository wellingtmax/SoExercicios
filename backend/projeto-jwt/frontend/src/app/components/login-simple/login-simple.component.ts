import { Component } from '@angular/core';

@Component({
  selector: 'app-login-simple',
  template: `
    <div style="padding: 20px; text-align: center;">
      <h1>Login Simples</h1>
      <p>Esta é uma versão simplificada do login para teste</p>
      <form>
        <div>
          <label>Login:</label>
          <input type="text" placeholder="Digite seu login">
        </div>
        <br>
        <div>
          <label>Senha:</label>
          <input type="password" placeholder="Digite sua senha">
        </div>
        <br>
        <button type="submit">Entrar</button>
      </form>
    </div>
  `
})
export class LoginSimpleComponent { }
