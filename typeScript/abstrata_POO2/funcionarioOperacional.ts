import { Funcionario } from "./funcionario";

/**
 * Classe FuncionarioOperacional - funcionário do setor operacional
 * Herda de Funcionario e recebe pagamento por horas extras
 */
export class FuncionarioOperacional extends Funcionario {
    
    constructor(
        nome: string,
        salarioBase: number,
        public horasExtras: number
    ) {
        super(nome, salarioBase);
    }

    // Implementação do método abstrato calcularSalario
    calcularSalario(): number {
        const valorHoraExtra = 20; // R$ 20 por hora extra
        return this.salarioBase + (this.horasExtras * valorHoraExtra);
    }

    // Método específico para exibir informações do funcionário operacional
    exibirDados(): void {
        console.log("🔧 === FUNCIONÁRIO OPERACIONAL ===");
        super.exibirDados(); // Chama o método da classe pai
        console.log(`⏰ Horas Extras: ${this.horasExtras}h`);
        console.log(`💰 Valor por Hora Extra: R$ 20,00`);
        console.log(`💵 Salário Final: R$ ${this.calcularSalario().toFixed(2)}`);
        console.log("─".repeat(90));
    }
}
