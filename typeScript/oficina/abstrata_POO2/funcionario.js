"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
/**
 * Classe abstrata Funcionario - representa um funcionário genérico da empresa
 * Não pode ser instanciada diretamente
 */
class Funcionario {
    constructor(nome, salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }
    // Método concreto - pode ser usado por todas as classes filhas
    exibirDados() {
        console.log(`👤 Nome: ${this.nome}`);
        console.log(`💰 Salário Base: R$ ${this.salarioBase.toFixed(2)}`);
    }
}
exports.Funcionario = Funcionario;
