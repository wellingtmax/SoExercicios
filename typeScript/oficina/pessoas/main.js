"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoas_1 = require("./pessoas");
const profissao_1 = require("./profissao");
const trabalho = new profissao_1.Profissao(4190012, 'Eletricista', 'APHA');
const profissional = new pessoas_1.nomePessoas('Luiz Sabatino', 50, '21.965.317-9', trabalho);
console.log(`${profissional.metPessoas()}`);
