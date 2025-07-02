export interface IProduto {
    nome: string;
    preco: number;
    descricao: string;
}

export interface Modelo extends IProduto{
    marca: string;
    origem: string;
} 