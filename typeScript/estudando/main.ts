import { Usuario } from "./usuario";
import { Estudante } from "./interface/estudante.interface";

const estudante: Estudante = {
    id: 1,
    nome: 'wellington',
    email: 'wel@gmail.com',
    matricula: 219853302,
    curso: 'Educação fisica',
    idade: 30
}

const usuario = new Usuario(estudante);
usuario.exibirDados();