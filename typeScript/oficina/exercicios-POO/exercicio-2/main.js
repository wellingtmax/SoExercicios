"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circulo_1 = require("./circulo");
const retangulo_1 = require("./retangulo");
// Criando um retângulo
console.log("\n" + "=".repeat(30) + "\n");
const retangulo = new retangulo_1.Retangulo(5, 10);
retangulo.exibirValor();
console.log("\n" + "=".repeat(30) + "\n");
// Criando um círculo
const circulo = new circulo_1.Circulo(3);
circulo.exibirValor();
console.log("\n" + "=".repeat(30) + "\n");
