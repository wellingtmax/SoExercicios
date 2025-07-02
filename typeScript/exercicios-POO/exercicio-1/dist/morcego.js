"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Morcego = void 0;
const Animalista_1 = require("./Animalista");
class Morcego extends Animalista_1.Animalista {
    constructor(nome, raca, cor) {
        super(nome, raca, cor);
    }
    voar() {
        return `O Morcego ${this.nome} da raça "${this.raca}" de cor ${this.cor} esta voando com uma ${this.comer()} na boca!`;
    }
}
exports.Morcego = Morcego;
