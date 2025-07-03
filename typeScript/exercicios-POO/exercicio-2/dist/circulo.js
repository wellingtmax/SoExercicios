"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = void 0;
const formaMetodos_1 = require("./formaMetodos");
class Circulo extends formaMetodos_1.FormaGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
    exibirValor() {
        console.log(`==Círculo:==`);
        console.log(`==>  Raio: ${this.raio}`);
        console.log(`==>  Área: ${this.calcularArea().toFixed(2)}`);
        console.log(`==>  Perímetro: ${this.calcularPerimetro().toFixed(2)}`);
    }
}
exports.Circulo = Circulo;
