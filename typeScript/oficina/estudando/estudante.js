"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperUsuario = void 0;
class SuperUsuario {
    constructor(estudante) {
        this.estudante = estudante;
    }
    exibirDados() {
        console.log(`Nome: ${this.estudante.nome}`);
        console.log(`Nome: ${this.estudante.curso}`);
        if (this.estudante.idade !== undefined) {
            console.log(`Idades: ${this.estudante.idade}`);
        }
    }
}
exports.SuperUsuario = SuperUsuario;
