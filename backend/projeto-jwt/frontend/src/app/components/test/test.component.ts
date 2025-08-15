import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      <h1>Componente de Teste</h1>
      <p>Se você está vendo isso, o roteamento está funcionando!</p>
      <a href="/login">Ir para Login</a>
    </div>
  `,
  styles: [`
    div {
      padding: 20px;
      text-align: center;
      background-color: #f0f0f0;
      margin: 20px;
    }
    h1 {
      color: #333;
    }
  `]
})
export class TestComponent { }
