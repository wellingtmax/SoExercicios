
import { Veiculo } from "./veiculo";

/**
 * A classe Carros estende Veiculo e implementa os métodos abstratos.
 */
export class Carros extends Veiculo {

    constructor(marca: string, modelo: string, ano: number) {
        super(marca, modelo, ano);
    }

    // Implementação do método abstrato ligar
    ligar(): void {
        this.ligado = true;
        console.log(`🚗 Carro ${this.marca} ${this.modelo} está ligado!`);
    }

    // Implementação do método abstrato exibirInformacoes
    exibirInformacoes(): void {
        console.log(`🚗 Carro: ${this.marca} ${this.modelo} (${this.ano})`);
        console.log(`Status: ${this.estaLigado() ? 'Ligado' : 'Desligado'}`);
    }

    // Método específico da classe Carros
    acelerar(): void {
        if (this.estaLigado()) {
            console.log(`⚡ ${this.marca} ${this.modelo} está acelerando! Vrum vrum! 💨`);
        } else {
            console.log("❌ Primeiro ligue o carro!");
        }
    }
    
    // Método adicional com emoji
    abastecer(): void {
        console.log(`⛽ ${this.marca} ${this.modelo} está abastecendo...`);
    }
}