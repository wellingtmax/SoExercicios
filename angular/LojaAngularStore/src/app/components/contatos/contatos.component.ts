import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contatos',
  imports: [ReactiveFormsModule],
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent {

  meuFormulario: any;

  constructor(private formBuilder: FormBuilder) {

    this.meuFormulario = this.formBuilder.group(
      {
        nome: ['', Validators.required],
        email: ['', Validators.required, '', Validators.email],
        mensagem: ['', Validators.required],
      }
    );
  }


  enviar() {
    if(this.meuFormulario.valid) {
    console.log(this.meuFormulario.value)
    } else {
      console.log('error')
    }
  }
}
