"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carros = void 0;
const veiculo_1 = require("./veiculo");
/**
 * A classe Carros estende Veiculo e implementa os métodos abstratos.
 */
class Carros extends veiculo_1.Veiculo {
    constructor(marca, modelo, ano) {
        super(marca, modelo, ano);
    }
    // Implementação do método abstrato ligar
    ligar() {
        this.ligado = true;
        console.log(`🚗 Carro ${this.marca} ${this.modelo} está ligado!`);
    }
    // Implementação do método abstrato exibirInformacoes
    exibirInformacoes() {
        console.log(`🚗 Carro: ${this.marca} ${this.modelo} (${this.ano})`);
        console.log(`Status: ${this.estaLigado() ? 'Ligado' : 'Desligado'}`);
    }
    // Método específico da classe Carros
    acelerar() {
        if (this.estaLigado()) {
            console.log(`⚡ ${this.marca} ${this.modelo} está acelerando! Vrum vrum! 💨`);
        }
        else {
            console.log("❌ Primeiro ligue o carro!");
        }
    }
    // Método adicional com emoji
    abastecer() {
        console.log(`⛽ ${this.marca} ${this.modelo} está abastecendo...`);
    }
}
exports.Carros = Carros;
