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
    toString(){
        return `
        Autor: ${this.autor.nome}
        Pais onde Nasceu: ${this.autor.pais}
        Nasceu no ano de: ${this.autor.anoNascimento}
            Titulo da Obra: ${this.titulo}
            Volume: ${this.volume}
            Ano de Lançamento: ${this.anoLancamento}
        `
    }

}