"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = void 0;
const formaMetodos_1 = require("./formaMetodos");
class Retangulo extends formaMetodos_1.FormaGeometrica {
    constructor(altura, largura) {
        super();
        this.altura = altura;
        this.largura = largura;
    }
    calcularArea() {
        return this.altura * this.largura;
    }
    calcularPerimetro() {
        return 2 * (this.altura + this.largura);
    }
    exibirValor() {
        console.log(`Retângulo:`);
        console.log(`  Altura: ${this.altura}`);
        console.log(`  Largura: ${this.largura}`);
        console.log(`  Área: ${this.calcularArea()}`);
        console.log(`  Perímetro: ${this.calcularPerimetro()}`);
    }
}
exports.Retangulo = Retangulo;
