import { FormaGeometrica } from "./formaMetodos"

export class Retangulo extends FormaGeometrica{
    altura: number;
    largura: number;

    constructor(altura: number, largura: number){
        super();
        this.altura = altura;
        this.largura = largura;
    }
}