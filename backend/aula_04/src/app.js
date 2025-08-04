const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Importar controller
const clienteController = require('./controller/clienteController');

// Rotas da API
app.get('/api/clientes', clienteController.buscarTodos);
app.get('/api/clientes/:id', clienteController.buscarPorId);
app.post('/api/clientes', clienteController.criar);
app.put('/api/clientes/:id', clienteController.atualizar);
app.delete('/api/clientes/:id', clienteController.deletar);

// Rota para servir o frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Rota de informações da API
app.get('/api', (req, res) => {
    res.json({ 
        message: 'API Oficina funcionando!',
        endpoints: [
            'GET /api/clientes',
            'GET /api/clientes/:id',
            'POST /api/clientes',
            'PUT /api/clientes/:id',
            'DELETE /api/clientes/:id'
        ]
    });
});

module.exports = app;