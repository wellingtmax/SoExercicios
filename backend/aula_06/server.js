const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
// Inicializar conexão com o banco de dados
require('./db');
// Importar as rotas
const userRoutes = require('./routes/userRoutes');
// Criar uma instância do Express
const app = express();
// Configurar middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware para log das requisições
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});
// Rota raiz
app.get('/', (req, res) => {
  res.json({
    message: 'API funcionando!',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});
// Usar as rotas de usuários
app.use('/api/users', userRoutes);
// Middleware para rotas não encontradas
app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Rota não encontrada',
    status: 'error',
    path: req.originalUrl
  });
});
// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error('❌ Erro:', err.stack);
  res.status(500).json({
    message: 'Erro interno do servidor',
    status: 'error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong!'
  });
});
// Definir a porta
const PORT = process.env.PORT || 3000;
// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`🚀🚀🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📍📍📍 URL: http://localhost:${PORT}`);
  console.log(`📊📊📊 Ambiente: ${process.env.NODE_ENV || 'development'}`);
});