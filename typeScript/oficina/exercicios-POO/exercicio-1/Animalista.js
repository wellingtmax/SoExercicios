"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animalista = void 0;
class Animalista {
    constructor(nome, raca, cor) {
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.comida = '';
    }
    comer(coisaASerComida = this.comida) {
        this.comida = coisaASerComida;
        return `${this.comida}`;
    }
}
exports.Animalista = Animalista;
