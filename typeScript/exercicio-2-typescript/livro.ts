import { Autor } from "./autor";

export class Livros{
    titulo: string;
    autor: Autor;
    volume: number;
    anoLancamento: number;

    constructor(titulo:string, autor:Autor, volume:number, anoLancamento:number){
        this.titulo = titulo;
        this.autor = autor;
        this.volume = volume;
        this.anoLancamento = anoLancamento
    }


    livTitulo(): string{
        return this.titulo
    }

    livAutor(): Autor {
        return this.autor
    }

    livVolume(): number{
        return this.volume
    }

    livAnoLancamento(): number{
        return this.anoLancamento
    }

}