"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gato_1 = require("./gato");
const cachorro_1 = require("./cachorro");
console.log("=== EXEMPLO DE HERANÇA ===");
// Criando um gato
const cat = new gato_1.Gato('Thor', 2, 'Siames', 'Preto');
console.log(`Gato: ${cat.getNome()}, ${cat.getIdade()} anos, raça ${cat.getRaca()}`);
console.log(`Cor do pelo: ${cat.corDoPelo}`);
cat.fazerSom();
cat.mover();
console.log("---");
// Criando um cachorro
const dog = new cachorro_1.Cachorro('Rex', 3, 'Vira-Lata', 50);
console.log(`Cachorro: ${dog.getNome()}, ${dog.getIdade()} anos, raça ${dog.getRaca()}`);
console.log(`Tamanho: ${dog.tamanho}cm`);
dog.fazerSom();
dog.mover();
