import { Animalista } from "./Animalista";

export class Baleia extends Animalista{

    constructor(nome:string, raca:string, cor:string,){
        super(nome, raca, cor)
    }

    comer(coisaASerComida = this.comida): string {
        this.comida = coisaASerComida
        return `${this.comida}`
    }

    nadar(): any{
        return `A Baleia ${this.nome} da raça "${this.raca}" de cor ${this.cor} esta comendo ${this.comer()} para depois nadar!`
    }
}