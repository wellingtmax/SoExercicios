"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autor = void 0;
class Autor {
    constructor(nome, pais, anoNascimento) {
        this.nome = nome;
        this.pais = pais;
        this.anoNascimento = anoNascimento;
    }
    stgAutor() {
        return this.nome;
    }
    stgPais() {
        return this.pais;
    }
    stgNascimento() {
        return this.anoNascimento;
    }
}
exports.Autor = Autor;
