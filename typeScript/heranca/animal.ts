export class AnimalEstimacao {

    private _nome: string;
    private _idade: number;
    private _raca: string;

    constructor(nome: string, idade: number, raca: string) {
        this._nome = nome;
        this._idade = idade;
        this._raca = raca;
    }

    public getNome(): string {
        return this._nome;
    }

    public setNome(nome: string) {
        this._nome = nome;
    }

    public getIdade(): number {
        return this._idade;
    }

    public setIdade(idade: number) {
        this._idade = idade;
    }

    public getRaca(): string {
        return this._raca;
    }

    public setRaca(raca: string) {
        this._raca = raca;
    }
    
    public emitirSom(): void {
        console.log("O animal está emitindo um som.");
    }

    public mover(): void {
        console.log(this._nome + " está se movendo.");
    }


}