import { ModeloCarro } from "./oficinaMecanica"


export class Consertar extends ModeloCarro{
    
    private _corCarro: string

    constructor(id:number, nome:string, marca:string, ano:number, corCarro:string){
        super(id, nome, marca, ano);
        this._corCarro = corCarro;
    }

    public get corCarro(): string {
    return this._corCarro;
   }

   public set corCarro(corCarro:string) {
    this.corCarro = corCarro
   }

   public fazerSom(): void {
    console.log("Vruummmm");
   
   }
}