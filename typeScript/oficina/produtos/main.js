"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produtos_1 = require("./produtos");
const gerar = new produtos_1.Produtos(10001, 'Alicate', 59.99);
console.log(`
    Codigo: ${gerar.codigo}
    Descrição: ${gerar.nome}
    Valor: R$ ${gerar.preco}
    `);
