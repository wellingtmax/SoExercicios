"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(estudante) {
        this.estudante = estudante;
    }
    exibirDados() {
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
exports.Usuario = Usuario;
