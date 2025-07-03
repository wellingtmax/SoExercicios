"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioAdministrativo = void 0;
const funcionario_1 = require("./funcionario");
/**
 * Classe FuncionarioAdministrativo - funcionário do setor administrativo
 * Herda de Funcionario e recebe bônus mensal
 */
class FuncionarioAdministrativo extends funcionario_1.Funcionario {
    constructor(nome, salarioBase, bonusMensal) {
        super(nome, salarioBase);
        this.bonusMensal = bonusMensal;
    }
    // Implementação do método abstrato calcularSalario
    calcularSalario() {
        return this.salarioBase + this.bonusMensal;
    }
    // Método específico para exibir informações do funcionário administrativo
    exibirDados() {
        console.log("🏢 === FUNCIONÁRIO ADMINISTRATIVO ===");
        super.exibirDados(); // Chama o método da classe pai
        console.log(`💸 Bônus Mensal: R$ ${this.bonusMensal.toFixed(2)}`);
        console.log(`💵 Salário Final: R$ ${this.calcularSalario().toFixed(2)}`);
        console.log("─".repeat(90));
    }
}
exports.FuncionarioAdministrativo = FuncionarioAdministrativo;
