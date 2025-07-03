import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-homer',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './homer.component.html',
  styleUrl: './homer.component.css'
})
export class HomerComponent {

}
