import { nomePessoas } from "./pessoas" 
import { Profissao } from "./profissao"

const trabalho = new Profissao(4190012, 'Eletricista', 'APHA')
const profissional = new nomePessoas('Luiz Sabatino', 50, '21.965.317-9', trabalho)

console.log(`${profissional.metPessoas()}`)