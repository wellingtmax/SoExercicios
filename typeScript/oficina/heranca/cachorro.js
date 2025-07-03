"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const animal_1 = require("./animal");
class Cachorro extends animal_1.AnimalEstimacao {
    constructor(nome, idade, raca, tamanho) {
        super(nome, idade, raca);
        this._tamanho = tamanho;
    }
    get tamanho() {
        return this._tamanho;
    }
    set tamanho(tamanho) {
        this._tamanho = tamanho;
    }
    fazerSom() {
        console.log("Au Au!");
    }
}
exports.Cachorro = Cachorro;
