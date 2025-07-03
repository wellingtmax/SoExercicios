"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descrit = void 0;
class descrit {
    constructor(nome, preco, descricao, marca, origem) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.marca = marca;
        this.origem = origem;
    }
    descricaoProdutos() {
        return `
        ${this.nome}
        ${this.preco}
        ${this.descricao}
        ${this.marca}
        ${this.origem}
        `;
    }
}
exports.descrit = descrit;
