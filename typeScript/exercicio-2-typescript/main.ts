import { Autor } from "./autor";
import { Livros } from "./livro";
import todos from './livrosAutor.json';


const totalLivros = new Livros();
const nomeAutor = new Autor();

console.log(`
    O autor ${nomeAutor.autor('José Hermeniones de Nobrega')} publicou ao logo de sua carreira ${totalLivros.total(50)} Livros
    e o mais conhecido ${totalLivros.nomeLivro('Eu venci o TypeScript volume 10')} rescebeu o Premio Paz!
    `)
todos.forEach(todos => {
    console.log(`
        Livos como "${todos.nome}"
        `)
})
