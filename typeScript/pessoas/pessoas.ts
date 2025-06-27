import { Profissao } from "./profissao";

export class nomePessoas{

    nome: string;
    idade: number;
    rg: string;
    profissao: Profissao

    constructor(nome:string, idade:number, rg:string, profissao:Profissao) {
        this.nome = nome;
        this.idade = idade;
        this.rg = rg;
        this.profissao = profissao;
    }

    metPessoas(){
        return `
        =====================================
        NOME: ${this.nome},
        IDADE: ${this.idade} ANOS,
        RG: ${this.rg}, ${this.profissao.qualProfissao()},
        =====================================
        `
    }


}