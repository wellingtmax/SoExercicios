import { Carros } from "./carros";
import { Moto } from "./motos";

console.log("=== EXEMPLO DE CLASSES ABSTRATAS ===\n");

// Criando um carro
const carro = new Carros('Toyota', 'Corolla', 2025);
console.log("TESTANDO CARRO:");
carro.exibirInformacoes();
carro.ligar();
carro.acelerar();
carro.desligar();

console.log("\n" + "=".repeat(40) + "\n");

// Criando uma moto
const moto = new Moto('Honda', 'CB 600F', 2023);
console.log("TESTANDO MOTO:");
moto.exibirInformacoes();
moto.ligar();
moto.empinar();
moto.desligar();

console.log("\n=== FIM DO TESTE ===");