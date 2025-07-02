"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const veiculo_1 = require("./veiculo");
/**
 * A classe Moto estende Veiculo e implementa os métodos abstratos.
 */
class Moto extends veiculo_1.Veiculo {
    constructor(marca, modelo, ano) {
        super(marca, modelo, ano);
    }
    // Implementação do método abstrato ligar
    ligar() {
        this.ligado = true;
        console.log(`🏍️ Moto ${this.marca} ${this.modelo} está ligada com ronco alto!`);
    }
    // Implementação do método abstrato exibirInformacoes
    exibirInformacoes() {
        console.log(`🏍️ Moto: ${this.marca} ${this.modelo} (${this.ano})`);
        console.log(`Status: ${this.estaLigado() ? 'Ligada' : 'Desligada'}`);
    }
    // Método específico da classe Moto
    empinar() {
        if (this.estaLigado()) {
            console.log(`${this.marca} ${this.modelo} está empinando! Cuidado!`);
        }
        else {
            console.log("Primeiro ligue a moto!");
        }
    }
}
exports.Moto = Moto;
