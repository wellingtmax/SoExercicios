import { Estudante } from "./interface/estudante.interface";


export class Usuario {

    estudante: Estudante;

    constructor(estudante: Estudante) {
        this.estudante = estudante;
    }

    exibirDados(): void {
        console.log(`
        |=============================================
        |   Id: ${this.estudante.id}
        |   Nome: ${this.estudante.nome}
        |   E-mail: ${this.estudante.email}
        |   Matricula: ${this.estudante.matricula}
        |   Curso: ${this.estudante.curso}
        |   Idades: ${this.estudante.idade}
        |=============================================
        `);

    }
}

