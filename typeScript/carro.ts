export class Carro {
    // atributos - variavel
    marca: string
    modelo: string
    ano: number
    ligado: boolean

    //metodos - método construtor
    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.ligado = true
    }
    //Método - ações
    ligar(): void {
        if (!this.ligado) {
            this.ligado = true
            console.log(`${this.modelo} Já esta ligado`)
        } else {
            console.log(`${this.modelo} estou ligando`)
        }
    }

    desligar(): void {//metodo não tem o return
        if (!this.ligado) {
            console.log("Estou desligando")
        } else {
            this.ligado = false
            console.log("Já está desligado")
        }
    }

    status():void{
        if(this.ligado){
            console.log ("O carro está LIGADO")
        }else{
            console.log("O carro está DESLIGADO")
        }
    }



}