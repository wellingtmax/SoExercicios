const readline = require('readline')
// input - output

const rl = readline.createInterface({
    input: process.stdin,
    outpput: process.stdout
})

rl.question("Qual o seu nome? ", (nome) => {
    console.log(`Ola, ${nome}! Bem vindo ao node.js`)
    rl.close();
})