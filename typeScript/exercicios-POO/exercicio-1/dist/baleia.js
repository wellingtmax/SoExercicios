"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Baleia = void 0;
const Animalista_1 = require("./Animalista");
class Baleia extends Animalista_1.Animalista {
    constructor(nome, raca, cor) {
        super(nome, raca, cor);
    }
    comer(coisaASerComida = this.comida) {
        this.comida = coisaASerComida;
        return `${this.comida}`;
    }
    nadar() {
        return `A Baleia ${this.nome} da raça "${this.raca}" de cor ${this.cor} esta comendo ${this.comer()} para depois nadar!`;
    }
}
exports.Baleia = Baleia;
