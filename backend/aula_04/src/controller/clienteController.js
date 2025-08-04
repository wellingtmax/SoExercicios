const clienteRepository = require('../repository/clienteRepository');

class ClienteController {

    // GET /api/clientes - Buscar todos os clientes
    buscarTodos(req, res) {
        clienteRepository.buscarTodos((erro, resultados) => {
            if (erro) {
                return res.status(500).json({ 
                    success: false, 
                    message: 'Erro ao buscar clientes',
                    error: erro.message 
                });
            }
            res.json({
                success: true,
                message: 'Clientes encontrados',
                data: resultados,
                total: resultados.length
            });
        });
    }

    // GET /api/clientes/:id - Buscar cliente por ID
    buscarPorId(req, res) {
        const { id } = req.params;
        
        clienteRepository.buscarPorId(id, (erro, resultados) => {
            if (erro) {
                return res.status(500).json({ 
                    success: false, 
                    message: 'Erro ao buscar cliente',
                    error: erro.message 
                });
            }
            
            if (resultados.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Cliente não encontrado'
                });
            }
            
            res.json({
                success: true,
                message: 'Cliente encontrado',
                data: resultados[0]
            });
        });
    }

    // POST /api/clientes - Criar novo cliente
    criar(req, res) {
        const clienteData = req.body;
        
        clienteRepository.criar(clienteData, (erro, resultado) => {
            if (erro) {
                return res.status(500).json({ 
                    success: false, 
                    message: 'Erro ao criar cliente',
                    error: erro.message 
                });
            }
            
            res.status(201).json({
                success: true,
                message: 'Cliente criado com sucesso',
                data: { id: resultado.insertId, ...clienteData }
            });
        });
    }

    // PUT /api/clientes/:id - Atualizar cliente
    atualizar(req, res) {
        const { id } = req.params;
        const clienteData = req.body;
        
        clienteRepository.atualizar(id, clienteData, (erro, resultado) => {
            if (erro) {
                return res.status(500).json({ 
                    success: false, 
                    message: 'Erro ao atualizar cliente',
                    error: erro.message 
                });
            }
            
            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Cliente não encontrado'
                });
            }
            
            res.json({
                success: true,
                message: 'Cliente atualizado com sucesso',
                data: { id: parseInt(id), ...clienteData }
            });
        });
    }

    // DELETE /api/clientes/:id - Deletar cliente
    deletar(req, res) {
        const { id } = req.params;
        
        clienteRepository.deletar(id, (erro, resultado) => {
            if (erro) {
                return res.status(500).json({ 
                    success: false, 
                    message: 'Erro ao deletar cliente',
                    error: erro.message 
                });
            }
            
            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Cliente não encontrado'
                });
            }
            
            res.json({
                success: true,
                message: 'Cliente deletado com sucesso', 
                id: parseInt(id),
            });
        });
    }
}

module.exports = new ClienteController();