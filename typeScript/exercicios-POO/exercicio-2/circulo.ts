import { FormaGeometrica } from "./formaMetodos"

export class Circulo extends FormaGeometrica {
    raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }

    exibirValor(): void {
        console.log(`==Círculo:==`);
        console.log(`==>  Raio: ${this.raio}`);
        console.log(`==>  Área: ${this.calcularArea().toFixed(2)}`);
        console.log(`==>  Perímetro: ${this.calcularPerimetro().toFixed(2)}`);
    }
}