"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const estudante_1 = require("./estudante");
const estudante = {
    id: 1,
    nome: 'wellington',
    curso: 'Educação fisica',
    idade: 28
};
const usuario = new estudante_1.SuperUsuario(estudante);
usuario.exibirDados();
