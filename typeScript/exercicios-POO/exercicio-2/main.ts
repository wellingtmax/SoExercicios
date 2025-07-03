import { Circulo } from "./circulo";
import { Retangulo } from "./retangulo";

// Criando um retângulo
console.log("\n" + "=".repeat(30) + "\n");
const retangulo = new Retangulo(5, 10);
retangulo.exibirValor();

console.log("\n" + "=".repeat(30) + "\n");

// Criando um círculo
const circulo = new Circulo(3);
circulo.exibirValor();
console.log("\n" + "=".repeat(30) + "\n");