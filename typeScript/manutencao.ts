export class Manutencao{
    data: string
    hora: string
    servico:string

    constructor(data:string,hora:string,servico:string){
        this.data = data
        this.hora = hora
        this.servico = servico
    }
//métodos próprios inserção dos valores noa atributos - GET (visualizar) e SET (inserir)
    //SET
    dataSet(data:string){
        this.data = data
    }
    horaSet(hora:string){
        this.hora = hora
    }
    servicoSet(servico:string){
        this.servico = servico
    }
    // GET
    exibirData(){
       return `${this.data}`
    }
    exibirHora(){
        return `${this.hora}`
    }
    exibirServico(){
        return `${this.servico}`
    }


}