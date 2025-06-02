//===================================1==================================
// function N1a100(){
    
//         for(let i = 1;i <=100;i++){

//             console.log(i)
//         }
// }
// N1a100()
//===================================2==================================

// function N100a1(){
    
//         for(let i = 100;i >= 1;i--){

//             console.log(i)
//         }
// }
// N100a1()
//===================================3==================================

// function quadrado(){
//     let nI = [15];
//    nI.forEach((inteiro) => {
//     for(let I = 15; I <= 200; I++)
//         console.log(`${I} x ${I} = ${I * I}`);
//    });
// }
//  quadrado()
//===================================4==================================

// function somaCemPrimeirosNumeros() {
//     let soma = 0;
//     for (let i = 1; i <= 100; i++) {
//         soma += i;
//     }
//     console.log(`A soma dos cem primeiros números inteiros é: ${soma}`);
// }
// somaCemPrimeirosNumeros();
//===================================5==================================

// function quadrado(){
//     let Tb = [2];
//    Tb.forEach((tabuada) => {
//     for(let t = 1; t <= 10; t++)
//         console.log(`${Tb} . ${t} = ${Tb * t}`);
//    });
// }
//  quadrado()
//===================================6==================================
// var prompt = require('prompt-sync')();

// let produto = prompt("digite a variavel: ");


// function multiplicacaoSucessiva(n) {
//     if (n <= 50) {
//         while (produto < 250) {
//             produto *= 3;
//             console.log(produto);
//         }
//     } else {
//         console.log("O número deve ser menor ou igual a 50.");
//     }
// }
// multiplicacaoSucessiva(produto);
//===================================7==================================

// function mostrarDivisiveisPor4() {
//   let contador = 1;

//   while (contador < 200) {
//     if (contador % 4 === 0) {
//       console.log(contador);
//     }
//     contador++;
//   }
// }
// mostrarDivisiveisPor4();
//===================================8==================================

// function imapar_par(){
//     let contador = 1;

//     while (contador <= 20) {
//         if (contador % 2 === 0) {
//             console.log(`${contador} é par`);
//         } else {
//             console.log(`${contador} é ímpar`);
//         }
//         contador++;
//     }
// }
// imapar_par();
//===================================9==================================

// let soma = 0;

// for (let i = 0; i <= 500; i += 2) {
//   soma += i;
// }

// console.log(`A soma dos valores pares de 0 até 500 é: ${soma}`);
//===================================10==================================

// function mostrarPotenciasDe3() {
//   for (let expoente = 0; expoente <= 15; expoente++) {
//     let resultado = Math.pow(3, expoente);
//     console.log(`3 elevado à ${expoente} = ${resultado}`);
//   }
// }

// mostrarPotenciasDe3();
//===================================11==================================


//  var prompt = require('prompt-sync')();

// let r = prompt("digite a base: ");
// let e = prompt("digite o expoente: ");
// function calcularPotencia(base, expoente) {
// //   let resultado = 1;

//   // Expoente positivo
//   for (let i = 0; i < expoente; i++) {
//     r *= base;
//   }

//   return r;
// }
// console.log(`${r} elevado à ${e} = ${calcularPotencia(r, e)}`);
//===================================12==================================
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let numeros = [];

// function perguntarNumero() {
//   rl.question('Digite um número real (-1 para encerrar): ', (input) => {
//     const numero = parseFloat(input);

//     if (numero === -1) {
//       if (numeros.length === 0) {
//         console.log("Nenhum número foi digitado.");
//       } else {
//         const maior = Math.max(...numeros);
//         const menor = Math.min(...numeros);
//         const soma = numeros.reduce((acc, val) => acc + val, 0);
//         const media = soma / numeros.length;

//         console.log(`\nMaior número: ${maior}`);
//         console.log(`Menor número: ${menor}`);
//         console.log(`Média dos números: ${media.toFixed(2)}`);
//       }
//       rl.close();
//     } else if (isNaN(numero)) {
//       console.log("Por favor, digite um número válido.");
//       perguntarNumero(); // repete a pergunta
//     } else {
//       numeros.push(numero);
//       perguntarNumero(); // continua pedindo
//     }
//   });
// }

// perguntarNumero();

//===================================13==================================

// function tab_3_a_6(){
//     for (let i = 3; i <= 6; i++) {
//         console.log(`Tabuada do ${i}:`);
//         for (let j = 1; j <= 10; j++) {
//             console.log(`${i} x ${j} = ${i * j}`);
//         }
//         console.log(''); // Linha em branco entre as tabuadas
//     }
// }
// tab_3_a_6();
//===================================14==================================
// let prompt = require('prompt-sync')();
// let FA = prompt("digite um numero: ");

// function fatorial(n) {
//     for(let i = n; i > 1; i--){
//         n *= (i - 1);
//     }
//     return n;
// }
// console.log(`O fatorial de ${FA} é: ${fatorial(FA)}
// por que ${FA}! = ${FA} x ${FA - 1} x ${FA - 2} x ... x 1`);
//===================================15==================================
function fibonacci(n) {
    let a = 0, b = 1, c;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
let n = 10;
console.log(`O ${n}º termo da sequência de Fibonacci é: ${fibonacci(n)}
a sequencia é: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...`);
