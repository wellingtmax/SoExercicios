import { AnimalEstimacao } from "./animal";


export class Gato extends AnimalEstimacao {

    private _corDoPelo:string

   constructor(nome: string, idade: number, raca: string, corDoPelo:string){
    super(nome, idade, raca);
    this._corDoPelo = corDoPelo;
   }

   public get corDoPelo(): string {
    return this._corDoPelo;
   }

   public set corDoPelo(corDoPelo: string) {
    this._corDoPelo = corDoPelo;
   }
   public fazerSom(): void {
    console.log("Miau");
   }
}

