"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livros = void 0;
class Livros {
    constructor(titulo, autor, volume, anoLancamento) {
        this.titulo = titulo;
        this.autor = autor;
        this.volume = volume;
        this.anoLancamento = anoLancamento;
    }
    livTitulo() {
        return this.titulo;
    }
    livAutor() {
        return this.autor;
    }
    livVolume() {
        return this.volume;
    }
    livAnoLancamento() {
        return this.anoLancamento;
    }
    toString() {
        return `
        Autor: ${this.autor.nome}
        Pais onde Nasceu: ${this.autor.pais}
        Nasceu no ano de: ${this.autor.anoNascimento}
            Titulo da Obra: ${this.titulo}
            Volume: ${this.volume}
            Ano de Lançamento: ${this.anoLancamento}
        `;
    }
}
exports.Livros = Livros;
