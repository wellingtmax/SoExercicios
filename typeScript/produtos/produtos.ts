export class Produtos{

    codigo: number;
    nome: string;
    preco: number;
    

    constructor(codigo:number, nome:string, preco:number){
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }

    setCodigo(): number{
       return this.codigo
    }
    setNome(): string{
        return this.nome
    }
    setPreco(): number{
        return this.preco
    }

    getProdutos(){
        this.setCodigo()
        this.setNome()
        this.setPreco()
    }
}