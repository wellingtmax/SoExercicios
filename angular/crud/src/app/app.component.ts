import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud';
}
