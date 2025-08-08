const express = require('express');
const router = express.Router();
const produtoController = require('../controller/produtoController');
const upload = require('../middleware/upload');

//Rotas para produtos
router.get('/produtos', produtoController.buscarTodos);
router.get('/produtos/:id', produtoController.buscarPorId);
router.post('/produtos', upload.single('imagem'), produtoController.criar);
router.put('/produtos/:id', upload.single('imagem'), produtoController.atualizar);
router.delete('/produtos/:id', produtoController.deletar);

module.exports = router;