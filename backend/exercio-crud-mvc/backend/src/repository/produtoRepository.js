const conexao = require('../config/db');

class ProdutosRepository {
    //listar todos os produtos
    buscarTodos(callback) {
        conexao.query('SELECT * FROM produtos ORDER BY id DESC', callback);
    }

    //listar produtos por ID
    buscarPorId(id, callback) {
        conexao.query('SELECT * FROM produtos WHERE id = ?', [id], callback);
    }

    //criar produtos
    criar(produtos, callback) {
        const { nome, preco, estoque, imagem } = produtos;
        conexao.query(
            'INSERT INTO produtos (nome, preco, estoque, imagem) VALUES (?, ?, ?, ?)',
            [nome, preco, estoque, imagem || null],
            callback
        );
    }

    //atualizar produtos
    atualizar(id, produtos, callback) {
        const {nome, preco, estoque, imagem} = produtos;
        conexao.query(
            'UPDATE produtos SET nome = ?, preco = ?, estoque = ?, imagem = ? WHERE id = ?',
            [nome, preco, estoque, imagem || null, id],
            callback
        )
    }

    //delete produtos
    deletar(id, callback) {
        conexao.query('DELETE FROM produtos WHERE id = ?', [id], callback);
    }
}

module.exports = new ProdutosRepository();