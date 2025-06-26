import { Manutencao } from "./manutencao";
import { Carro } from "./carro";

const car = new Carro('Fiat', 'Tempra', 95)
const man = new Manutencao('20-05-2025', '12:30', 'troca pastilha')

// man.data = '05-02-2025'

// console.log(`A data é: ${man.exibirData()} - Hora: ${man.exibirHora()} serviço: ${man.exibirServico()}`)

console.log(`Na data: ${man.exibirData()}`)
console.log(`a hora é: ${man.exibirHora()}`)
console.log(`O serviço: ${man.exibirServico()}`)


