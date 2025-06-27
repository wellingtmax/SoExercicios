"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const autor_1 = require("./autor");
const livro_1 = require("./livro");
const livrosAutor_json_1 = __importDefault(require("./livrosAutor.json"));
const totalLivros = new livro_1.Livros();
const nomeAutor = new autor_1.Autor();
console.log(`
    O autor ${nomeAutor.autor('José Hermeniones de Nobrega')} publicou ao logo de sua carreira ${totalLivros.total(50)} Livros
    e o mais conhecido ${totalLivros.nomeLivro('Eu venci o TypeScript volume 10')} rescebeu o Premio Paz!
    `);
livrosAutor_json_1.default.forEach(todos => {
    console.log(`
        Livos como "${todos.nome}"
        `);
});
