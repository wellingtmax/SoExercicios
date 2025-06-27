"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomePessoas = void 0;
class nomePessoas {
    constructor(nome, idade, rg, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.rg = rg;
        this.profissao = profissao;
    }
    metPessoas() {
        console.log(`
            ${this.nome}
            ${this.idade}
            ${this.rg}
            ${this.profissao}
            `);
    }
}
exports.nomePessoas = nomePessoas;
