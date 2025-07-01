import { ModeloCarro } from "./oficinaMecanica" 
import { Consertar } from "./ConsertoVeiculo"



const car = new ModeloCarro(102548, 'Fiat','Punto',2025)
const con = new Consertar(11213, 'I30','Hynday',2025, 'Preto')

console.log( car.getExibirVeiculo())
console.log("============================")
car.mover()
car.carLigado()
con.fazerSom()
console.log("============================")