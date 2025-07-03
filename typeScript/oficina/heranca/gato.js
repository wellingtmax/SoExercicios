"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
const animal_1 = require("./animal");
class Gato extends animal_1.AnimalEstimacao {
    constructor(nome, idade, raca, corDoPelo) {
        super(nome, idade, raca);
        this._corDoPelo = corDoPelo;
    }
    get corDoPelo() {
        return this._corDoPelo;
    }
    set corDoPelo(corDoPelo) {
        this._corDoPelo = corDoPelo;
    }
    fazerSom() {
        console.log("Miau");
    }
}
exports.Gato = Gato;
