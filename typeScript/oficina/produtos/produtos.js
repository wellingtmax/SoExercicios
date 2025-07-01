"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produtos = void 0;
class Produtos {
    constructor(codigo, nome, preco) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }
    setCodigo() {
        return this.codigo;
    }
    setNome() {
        return this.nome;
    }
    setPreco() {
        return this.preco;
    }
    getProdutos() {
        this.setCodigo();
        this.setNome();
        this.setPreco();
    }
}
exports.Produtos = Produtos;
