const produtoService = require('../service/produtoService');

class ProdutosController {
    //GET /produtos - Buscar produtos
    async buscarTodos(req, res){
        try {
            const produtos = await produtoService.buscarTodos();
            res.json({
                success: true,
                message: 'Produtos encontrados',
                data: produtos,
                total: produtos.length
            });
        } catch (erro) {
            return res.status(500).json({
                success: false,
                message: 'Erro ao buscar produtos',
                error: erro.message
            });
        }
    }

    // GET /produtos/:id - Buscar produtos por ID
    async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const produto = await produtoService.buscarPorId(id);
            
            res.json({
                success: true,
                message: 'Produto encontrado',
                data: produto
            });
        } catch (erro) {
            const statusCode = erro.message.includes('não encontrado') ? 404 : 400;
            return res.status(statusCode).json({
                success: false,
                message: 'Erro ao buscar produto',
                error: erro.message
            });
        }
    }

    // POST /produtos - Criar novo produto
    async criar(req, res) {
        try {
            const dadosProduto = req.body;
            
            // Se há uma imagem enviada, adiciona o caminho ao dadosProduto
            if (req.file) {
                dadosProduto.imagem = req.file.filename;
            }
            
            const novoProduto = await produtoService.criar(dadosProduto);
            
            res.status(201).json({
                success: true,
                message: 'Produto criado com sucesso',
                data: novoProduto
            });
        } catch (erro) {
            return res.status(400).json({
                success: false,
                message: 'Erro ao criar produto',
                error: erro.message
            });
        }
    }

    // PUT /produtos/:id - Atualizar produto
    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const dadosProduto = req.body;
            
            // Se há uma imagem enviada, adiciona o caminho ao dadosProduto
            if (req.file) {
                dadosProduto.imagem = req.file.filename;
            }
            
            const produtoAtualizado = await produtoService.atualizar(id, dadosProduto);
            
            res.json({
                success: true,
                message: 'Produto atualizado com sucesso',
                data: produtoAtualizado
            });
        } catch (erro) {
            const statusCode = erro.message.includes('não encontrado') ? 404 : 400;
            return res.status(statusCode).json({
                success: false,
                message: 'Erro ao atualizar produto',
                error: erro.message
            });
        }
    }

    // DELETE /produtos/:id - Deletar produto
    async deletar(req, res) {
        try {
            const { id } = req.params;
            const resultado = await produtoService.deletar(id);
            
            res.json({
                success: true,
                message: resultado.message
            });
        } catch (erro) {
            const statusCode = erro.message.includes('não encontrado') ? 404 : 400;
            return res.status(statusCode).json({
                success: false,
                message: 'Erro ao deletar produto',
                error: erro.message
            });
        }
    }
}

module.exports = new ProdutosController();