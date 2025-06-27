import { Produtos } from "./produtos";

const gerar = new Produtos(10001, 'Alicate', 59.99)

console.log(`
    Codigo: ${gerar.codigo}
    Descrição: ${gerar.nome}
    Valor: R$ ${gerar.preco}
    `)