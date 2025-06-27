import { Profissao } from "./profissao";

export class nomePessoas{

    nome: string;
    idade: number;
    rg: number;
    profissao: Profissao

    constructor(nome:string, idade:number, rg:number, profissao:Profissao) {
        this.nome = nome;
        this.idade = idade;
        this.rg = rg;
        this.profissao = profissao;
    }

    metPessoas(){
        console.log(`
            ${this.nome}
            ${this.idade}
            ${this.rg}
            ${this.profissao}
            `)
    }


}