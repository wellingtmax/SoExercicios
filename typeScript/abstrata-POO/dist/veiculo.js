"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
/**
 * Classe abstrata Veiculo - não pode ser instanciada diretamente
 */
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false;
    }
    // Método concreto - pode ser usado por todas as classes filhas
    desligar() {
        this.ligado = false;
        console.log(`${this.marca} ${this.modelo} foi desligado.`);
    }
    // Método concreto para verificar se está ligado
    estaLigado() {
        return this.ligado;
    }
}
exports.Veiculo = Veiculo;
