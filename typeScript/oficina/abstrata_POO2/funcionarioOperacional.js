"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioOperacional = void 0;
const funcionario_1 = require("./funcionario");
/**
 * Classe FuncionarioOperacional - funcionário do setor operacional
 * Herda de Funcionario e recebe pagamento por horas extras
 */
class FuncionarioOperacional extends funcionario_1.Funcionario {
    constructor(nome, salarioBase, horasExtras) {
        super(nome, salarioBase);
        this.horasExtras = horasExtras;
    }
    // Implementação do método abstrato calcularSalario
    calcularSalario() {
        const valorHoraExtra = 20; // R$ 20 por hora extra
        return this.salarioBase + (this.horasExtras * valorHoraExtra);
    }
    // Método específico para exibir informações do funcionário operacional
    exibirDados() {
        console.log("🔧 === FUNCIONÁRIO OPERACIONAL ===");
        super.exibirDados(); // Chama o método da classe pai
        console.log(`⏰ Horas Extras: ${this.horasExtras}h`);
        console.log(`💰 Valor por Hora Extra: R$ 20,00`);
        console.log(`💵 Salário Final: R$ ${this.calcularSalario().toFixed(2)}`);
        console.log("─".repeat(90));
    }
}
exports.FuncionarioOperacional = FuncionarioOperacional;
