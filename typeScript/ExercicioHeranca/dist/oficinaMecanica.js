"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeloCarro = void 0;
class ModeloCarro {
    constructor(id, nome, marca, ano) {
        this.id = id;
        this.nome = nome;
        this.marca = marca;
        this.ano = ano;
    }
    setExibirVeiculo(id, nome, marca, ano) {
        this.id = id,
            this.nome = nome;
        this.marca = marca;
        this.ano = ano;
    }
    getExibirVeiculo() {
        return `
        ${this.id}
        ${this.nome}
        ${this.marca}
        ${this.ano}
        `;
    }
    carLigado() {
        console.log("O carro esta ligado!");
    }
    mover() {
        console.log(this.nome + " está se movendo.");
    }
}
exports.ModeloCarro = ModeloCarro;
