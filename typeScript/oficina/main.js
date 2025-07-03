"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manutencao_1 = require("./manutencao");
const carro_1 = require("./carro");
const car = new carro_1.Carro('Fiat', 'Tempra', 95);
const man = new manutencao_1.Manutencao('20-05-2025', '12:30', 'troca pastilha');
// man.data = '05-02-2025'
// console.log(`A data é: ${man.exibirData()} - Hora: ${man.exibirHora()} serviço: ${man.exibirServico()}`)
console.log(`Na data: ${man.exibirData()}`);
console.log(`a hora é: ${man.exibirHora()}`);
console.log(`O serviço: ${man.exibirServico()}`);
