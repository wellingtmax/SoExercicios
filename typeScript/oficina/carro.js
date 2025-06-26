"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    //metodos - método construtor
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = true;
    }
    //Método - ações
    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`${this.modelo} Já esta ligado`);
        }
        else {
            console.log(`${this.modelo} estou ligando`);
        }
    }
    desligar() {
        if (!this.ligado) {
            console.log("Estou desligando");
        }
        else {
            this.ligado = false;
            console.log("Já está desligado");
        }
    }
    status() {
        if (this.ligado) {
            console.log("O carro está LIGADO");
        }
        else {
            console.log("O carro está DESLIGADO");
        }
    }
}
exports.Carro = Carro;
