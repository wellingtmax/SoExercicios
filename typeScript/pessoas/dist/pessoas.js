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
        return `
        =====================================
        NOME: ${this.nome},
        IDADE: ${this.idade} ANOS,
        RG: ${this.rg}, ${this.profissao.qualProfissao()},
        =====================================
        `;
    }
}
exports.nomePessoas = nomePessoas;
