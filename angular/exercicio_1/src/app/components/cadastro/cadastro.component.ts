import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CadastroService } from '../../service/cadastro.service';


@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

cadFrom: FormGroup;
mensagem: string = ''
constructor(
  private fb:FormBuilder,
  private cadastroService: CadastroService
)
{

  this.cadFrom = this.fb.group({
    nome:['', [Validators.required]],
    email:['', [Validators.required]],
    date:['', [Validators.required]],
    telefone:['', [Validators.required]],
    senha:['', [Validators.required]]
  })
}

cadastrar() {
  if(this.cadFrom.valid){
    const senha = this.cadFrom.get('senha')?.value;
    const email = this.cadFrom.get('email')?.value;

    this.cadastroService.set('senha', senha);
    this.cadastroService.set('email', email);

    console.log('Salvou no localStorage via service');
    console.log('Nome:', this.cadastroService.get('nome'));
    console.log(this.cadFrom.value)


    this.cadFrom.reset()
    this.mensagem = '👍Obrigado por se cadastrar👍'

  } else {
    this.mensagem = `☣Preencha todos os campos! ☣`
  }
}

}
