import { FormaGeometrica } from "./formaMetodos"


export class Circulo extends FormaGeometrica {
    c: number;
    pi: number;

    constructor(c: number, pi: number) {
        super();
        this.c = c;
        this.pi = pi;
    }
}