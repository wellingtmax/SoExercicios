export class Autor {
   nome: string;
   pais: string;
   anoNascimento: number
    
    constructor(nome: string, pais:string, anoNascimento:number){
        this.nome = nome;
        this.pais = pais;
        this.anoNascimento = anoNascimento;
     }

    stgAutor(): string{
        return this.nome;
    }

    stgPais(): string{
        return this.pais;
    }

    stgNascimento(): number{
        return this.anoNascimento;
    }
}