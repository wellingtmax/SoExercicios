const conexao = require('../config/db');

class ClienteRepository {
    
    // Buscar todos os clientes
    buscarTodos(callback) {
        conexao.query('SELECT * FROM Cliente ORDER BY id DESC', callback);
    }

    // Buscar cliente por ID
    buscarPorId(id, callback) {
        conexao.query('SELECT * FROM Cliente WHERE id = ?', [id], callback);
    }

    // Criar novo cliente
    criar(cliente, callback) {
        const { nome, cpf, sexo } = cliente;
        conexao.query(
            'INSERT INTO Cliente (nome, cpf, sexo) VALUES (?, ?, ?)',
            [nome, cpf, sexo],
            callback
        );
    }

    // Atualizar cliente
    atualizar(id, cliente, callback) {
        const { nome, cpf, sexo } = cliente;
        conexao.query(
            'UPDATE Cliente SET nome = ?, cpf = ?, sexo = ? WHERE id = ?',
            [nome, cpf, sexo, id],
            callback
        );
    }

    // Deletar cliente
    deletar(id, callback) {
        conexao.query('DELETE FROM Cliente WHERE id = ?', [id], callback);
    }
}

module.exports = new ClienteRepository();
