const express = require('express');
const router = express.Router();
const clienteController = require('../controller/clienteController');

// Rotas para clientes
router.get('/clientes', clienteController.buscarTodos);
router.get('/clientes/:id', clienteController.buscarPorId);
router.post('/clientes', clienteController.criar);
router.put('/clientes/:id', clienteController.atualizar);
router.delete('/clientes/:id', clienteController.deletar);

module.exports = router;