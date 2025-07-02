export abstract class Animalista{

    constructor(public nome:string, public raca:string, public cor:string){}

    protected comida:any = ''



    comer(coisaASerComida = this.comida): string{
        this.comida = coisaASerComida

        return `${this.comida}`
    } 
}