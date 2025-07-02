/**
 * Classe abstrata Veiculo - não pode ser instanciada diretamente
 */
export abstract class Veiculo {
    protected ligado: boolean = false;
    
    constructor(public marca: string, public modelo: string, public ano: number) {}

    // Método abstrato - deve ser implementado pelas classes filhas
    abstract ligar(): void;
    
    // Método abstrato - deve ser implementado pelas classes filhas
    abstract exibirInformacoes(): void;
    
    // Método concreto - pode ser usado por todas as classes filhas
    desligar(): void {
        this.ligado = false;
        console.log(`${this.marca} ${this.modelo} foi desligado.`);
    }
    
    // Método concreto para verificar se está ligado
    estaLigado(): boolean {
        return this.ligado;
    }
}