import { Veiculo } from "./veiculo";

/**
 * A classe Moto estende Veiculo e implementa os métodos abstratos.
 */
export class Moto extends Veiculo {
    
    constructor(marca: string, modelo: string, ano: number) {
        super(marca, modelo, ano);
    }
    
    // Implementação do método abstrato ligar
    ligar(): void {
        this.ligado = true;
        console.log(`🏍️ Moto ${this.marca} ${this.modelo} está ligada com ronco alto!`);
    }
    
    // Implementação do método abstrato exibirInformacoes
    exibirInformacoes(): void {
        console.log(`🏍️ Moto: ${this.marca} ${this.modelo} (${this.ano})`);
        console.log(`Status: ${this.estaLigado() ? 'Ligada' : 'Desligada'}`);
    }
    
    // Método específico da classe Moto
    empinar(): void {
        if (this.estaLigado()) {
            console.log(`${this.marca} ${this.modelo} está empinando! Cuidado!`);
        } else {
            console.log("Primeiro ligue a moto!");
        }
    }
}