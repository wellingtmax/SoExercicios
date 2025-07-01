"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("./usuario");
const estudante = {
    id: 1,
    nome: 'wellington',
    email: 'wel@gmail.com',
    matricula: 219853302,
    curso: 'Educação fisica',
    idade: 30
};
const usuario = new usuario_1.Usuario(estudante);
usuario.exibirDados();
