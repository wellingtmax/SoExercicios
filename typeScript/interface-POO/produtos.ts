import { Modelo } from "./interface_prod";

export class descrit implements Modelo {
    

    constructor(
        public nome: string, 
        public preco: number, 
        public descricao: string,
        public marca: string,
        public origem:string,
    ) {}
    descricaoProdutos(){
        return `
        ${this.nome}
        ${this.preco}
        ${this.descricao}
        ${this.marca}
        ${this.origem}
        `    
        }
}