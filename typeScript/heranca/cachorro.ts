import { AnimalEstimacao } from "./animal";

export class Cachorro extends AnimalEstimacao {
    private _tamanho: number; //em cm

    constructor(nome:string, idade:number, raca:string, tamanho:number) {
        super(nome, idade, raca);
        this._tamanho = tamanho;
    }

    public get tamanho(): number {
        return this._tamanho;
    }

    public set tamanho(tamanho: number) {
        this._tamanho = tamanho;
    }
    public fazerSom(): void {
        console.log("Au Au!");
    }

}