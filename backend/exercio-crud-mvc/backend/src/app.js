const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const produtoRoutes = require('./routes/produtoRoutes');

// Middlewares
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos da pasta uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Rota principal
app.get('/', (req, res) => {
    res.json({
        message: 'API CRUD Produtos funcionando!',
        version: '1.0.0'
    });
});

// Rotas da API
app.use('/api', produtoRoutes);

module.exports = app;