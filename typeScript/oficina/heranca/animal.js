"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalEstimacao = void 0;
class AnimalEstimacao {
    constructor(nome, idade, raca) {
        this._nome = nome;
        this._idade = idade;
        this._raca = raca;
    }
    getNome() {
        return this._nome;
    }
    setNome(nome) {
        this._nome = nome;
    }
    getIdade() {
        return this._idade;
    }
    setIdade(idade) {
        this._idade = idade;
    }
    getRaca() {
        return this._raca;
    }
    setRaca(raca) {
        this._raca = raca;
    }
    emitirSom() {
        console.log("O animal está emitindo um som.");
    }
    mover() {
        console.log(this._nome + " está se movendo.");
    }
}
exports.AnimalEstimacao = AnimalEstimacao;
