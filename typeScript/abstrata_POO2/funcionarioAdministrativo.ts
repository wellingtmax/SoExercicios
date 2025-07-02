import { Funcionario } from "./funcionario";

/**
 * Classe FuncionarioAdministrativo - funcionário do setor administrativo
 * Herda de Funcionario e recebe bônus mensal
 */
export class FuncionarioAdministrativo extends Funcionario {
    
    constructor(
        nome: string,
        salarioBase: number,
        public bonusMensal: number
    ) {
        super(nome, salarioBase);
    }

    // Implementação do método abstrato calcularSalario
    calcularSalario(): number {
        return this.salarioBase + this.bonusMensal;
    }

    // Método específico para exibir informações do funcionário administrativo
    exibirDados(): void {
        console.log("🏢 === FUNCIONÁRIO ADMINISTRATIVO ===");
        super.exibirDados(); // Chama o método da classe pai
        console.log(`💸 Bônus Mensal: R$ ${this.bonusMensal.toFixed(2)}`);
        console.log(`💵 Salário Final: R$ ${this.calcularSalario().toFixed(2)}`);
        console.log("─".repeat(90));
    }
}
