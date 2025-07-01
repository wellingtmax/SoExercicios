export class ModeloCarro {
    id: number
    nome: string
    marca: string
    ano: number


    constructor(id:number, nome:string, marca:string, ano:number) {
        this.id = id
        this.nome = nome
        this.marca = marca
        this.ano = ano
    }


    setExibirVeiculo(id:number, nome:string, marca:string, ano:number){

        this.id = id,
        this.nome = nome
        this.marca = marca
        this.ano = ano

    }

    getExibirVeiculo(){
        return `
        ${this.id}
        ${this.nome}
        ${this.marca}
        ${this.ano}
        `
    }

    public carLigado(): void {
        console.log("O carro esta ligado!");
    }

    public mover(): void {
        console.log(this.nome + " está se movendo.");
    }




}