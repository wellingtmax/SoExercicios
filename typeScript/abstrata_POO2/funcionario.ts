/**
 * Classe abstrata Funcionario - representa um funcionário genérico da empresa
 * Não pode ser instanciada diretamente
 */
export abstract class Funcionario {
    
    constructor(
        public nome: string,
        public salarioBase: number
    ) {}

    // Método concreto - pode ser usado por todas as classes filhas
    exibirDados(): void {
        console.log(`👤 Nome: ${this.nome}`);
        console.log(`💰 Salário Base: R$ ${this.salarioBase.toFixed(2)}`);
    }

    // Método abstrato - deve ser implementado pelas classes filhas
    abstract calcularSalario(): number;
}
