import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contatos',
  imports: [FormsModule, CommonModule],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent {
  isSubmitting = false;
  showSuccessMessage = false;

  formData = {
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
    aceito: false
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isSubmitting = true;
      
      // Simular envio do formulário
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        
        // Reset form
        form.resetForm();
        this.formData = {
          nome: '',
          email: '',
          telefone: '',
          assunto: '',
          mensagem: '',
          aceito: false
        };

        // Esconder mensagem de sucesso após 5 segundos
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      }, 2000);
    }
  }
}
