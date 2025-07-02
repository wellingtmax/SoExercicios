"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funcionarioAdministrativo_1 = require("./funcionarioAdministrativo");
const funcionarioOperacional_1 = require("./funcionarioOperacional");
// Criando um funcionário administrativo
const admin = new funcionarioAdministrativo_1.FuncionarioAdministrativo("Maria Silva", 3000, 500);
console.log("─".repeat(90));
console.log("Funcionário Administrativo:");
admin.exibirDados();
console.log("---");
// Criando um funcionário operacional
const operacional = new funcionarioOperacional_1.FuncionarioOperacional("João Santos", 2500, 10);
console.log("Funcionário Operacional:");
operacional.exibirDados();
