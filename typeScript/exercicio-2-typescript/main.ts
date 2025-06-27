import { Autor } from "./autor";
import { Livros } from "./livro";
import todos from './livrosAutor.json';


const autor1 = new Autor('William Shakespeare', 'Stratford-upon-Avon, Inglaterra', 1564 );
const autor2 = new Autor('Jules Gabriel Verne', 'Nantes, França', 1828);
const autor3 = new Autor('J. K. Rowling', ' South Gloucestershire, Reino Unido',  1965 );

const livros1 = new Livros('Romeu e Julieta', autor1, 1, 1592 )
const livros2 = new Livros('Cinco semanas em um balão', autor2, 1, 1863 )
const livros3 = new Livros('Harry Potter e a Pedra Filosofal', autor3, 1, 1997 )



console.log('==============================================================')
console.log(livros1)
console.log('==============================================================')
console.log(livros2)
console.log('==============================================================')
console.log(livros3)
console.log('==============================================================')
