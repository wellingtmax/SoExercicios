const produtoRepository = require('../repository/produtoRepository');

class ProdutosService {
    //buscar todos
    buscarTodos() {
        return new Promise((resolve, reject) => {
            produtoRepository.buscarTodos((erro, resultados) => {
                if (erro) {
                    reject(new Error(`Erro no serviço ao buscar produtos: ${erro.message}`));
                } else {
                    resolve(resultados);
                }
            });
        });
    }

    //buscar por id
    buscarPorId(id) {
        return new Promise((resolve, reject) => {
            if (!id || isNaN(id)) {
                reject(new Error('ID deve ser um número válido'));
                return;
            }

            produtoRepository.buscarPorId(id, (erro, resultado) => {
                if (erro) {
                    reject(new Error(`Erro no serviço ao buscar produto: ${erro.message}`));
                } else if (!resultado || resultado.length === 0) {
                    reject(new Error('Produto não encontrado'));
                } else {
                    resolve(resultado[0]);
                }
            });
        });
    }

    // Criar novo produto
    criar(dadosProduto) {
        return new Promise((resolve, reject) => {
            const { nome, preco, estoque } = dadosProduto;
            
            if (!nome || !preco || estoque === undefined) {
                reject(new Error('Nome, preço e estoque são obrigatórios'));
                return;
            }

            if (isNaN(preco) || isNaN(estoque)) {
                reject(new Error('Preço e estoque devem ser números válidos'));
                return;
            }

            produtoRepository.criar(dadosProduto, (erro, resultado) => {
                if (erro) {
                    reject(new Error(`Erro no serviço ao criar produto: ${erro.message}`));
                } else {
                    resolve({
                        id: resultado.insertId,
                        nome,
                        preco: parseFloat(preco),
                        estoque: parseInt(estoque)
                    });
                }
            });
        });
    }
    
    // Atualizar produto
    atualizar(id, dadosProduto) {
        return new Promise((resolve, reject) => {
            if (!id || isNaN(id)) {
                reject(new Error('ID deve ser um número válido'));
                return;
            }

            const { nome, preco, estoque } = dadosProduto;
            
            if (!nome || !preco || estoque === undefined) {
                reject(new Error('Nome, preço e estoque são obrigatórios'));
                return;
            }

            if (isNaN(preco) || isNaN(estoque)) {
                reject(new Error('Preço e estoque devem ser números válidos'));
                return;
            }

            produtoRepository.atualizar(id, dadosProduto, (erro, resultado) => {
                if (erro) {
                    reject(new Error(`Erro no serviço ao atualizar produto: ${erro.message}`));
                } else if (resultado.affectedRows === 0) {
                    reject(new Error('Produto não encontrado'));
                } else {
                    resolve({
                        id,
                        nome,
                        preco: parseFloat(preco),
                        estoque: parseInt(estoque)
                    });
                }
            });
        });
    }

    // Deletar produto
    deletar(id) {
        return new Promise((resolve, reject) => {
            if (!id || isNaN(id)) {
                reject(new Error('ID deve ser um número válido'));
                return;
            }

            produtoRepository.deletar(id, (erro, resultado) => {
                if (erro) {
                    reject(new Error(`Erro no serviço ao deletar produto: ${erro.message}`));
                } else if (resultado.affectedRows === 0) {
                    reject(new Error('Produto não encontrado'));
                } else {
                    resolve({ message: 'Produto deletado com sucesso' });
                }
            });
        });
    }
}

module.exports = new ProdutosService();