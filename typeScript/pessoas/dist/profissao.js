"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profissao = void 0;
class Profissao {
    constructor(matricula, nomeProfissao, setor) {
        this.matricula = matricula;
        this.nomeProfissao = nomeProfissao;
        this.setor = setor;
    }
    qualProfissao() {
        return `
        MATRICULA: ${this.matricula},
        PROFISSÃO: ${this.nomeProfissao},
        SETOR: ${this.setor}`;
    }
}
exports.Profissao = Profissao;
