import { Animalista } from "./Animalista";

export class Morcego extends Animalista{
    constructor(nome:string, raca:string, cor:string){

        super(nome,raca,cor)
    }


    voar(): any{
        return `O Morcego ${this.nome} da raça "${this.raca}" de cor ${this.cor} esta voando com uma ${this.comer()} na boca!`
    }



}