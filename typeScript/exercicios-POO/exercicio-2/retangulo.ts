import { FormaGeometrica } from "./formaMetodos"

export class Retangulo extends FormaGeometrica {
    altura: number;
    largura: number;

    constructor(altura: number, largura: number) {
        super();
        this.altura = altura;
        this.largura = largura;
    }

    calcularArea(): number {
        return this.altura * this.largura;
    }

    calcularPerimetro(): number {
        return 2 * (this.altura + this.largura);
    }

    exibirValor(): void {
        console.log(`==Retângulo:==`);
        console.log(`==>  Altura: ${this.altura}`);
        console.log(`==>  Largura: ${this.largura}`);
        console.log(`==>  Área: ${this.calcularArea()}`);
        console.log(`==>  Perímetro: ${this.calcularPerimetro()}`);
    }
}