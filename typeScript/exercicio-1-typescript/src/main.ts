import { Calculadora } from "./claculadora-simple";

const resultado = new Calculadora();

console.log(`
    a soma de 250 + 150 é: ${resultado.somar(250, 150)}
    a subtração de 50 - 20 é: ${resultado.subtrair(50, 20)}
    a divisão de 600 / 3 é: ${resultado.dividir(600, 3)}
    a multiplicação de 10 * 20 é: ${resultado.multiplicar(10,20)}
    a elevação de 2^5 é: ${resultado.elevacao(2,5)}
    `);











