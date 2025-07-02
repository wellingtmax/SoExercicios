import { Funcionario } from "./funcionario";
import { FuncionarioAdministrativo } from "./funcionarioAdministrativo";
import { FuncionarioOperacional } from "./funcionarioOperacional";

// Criando um funcionário administrativo
const admin = new FuncionarioAdministrativo("Maria Silva", 3000, 500);
console.log("─".repeat(90));
console.log("Funcionário Administrativo:");
admin.exibirDados();

console.log("---");

// Criando um funcionário operacional
const operacional = new FuncionarioOperacional("João Santos", 2500, 10);
console.log("Funcionário Operacional:");
operacional.exibirDados();


