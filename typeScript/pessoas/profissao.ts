export class Profissao{
    matricula: number;
    nomeProfissao: string;
    setor: string;

    constructor(matricula:number, nomeProfissao:string, setor:string) {
        this.matricula = matricula;
        this.nomeProfissao = nomeProfissao;
        this.setor = setor;
    }

    qualProfissao(){
        return `
        MATRICULA: ${this.matricula},
        PROFISSÃO: ${this.nomeProfissao},
        SETOR: ${this.setor}`
    }
}