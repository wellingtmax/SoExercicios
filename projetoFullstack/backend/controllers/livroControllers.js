const express = require('express');
const router = express.Router();
const Livro = require('../model/livro');

//Get todos  os livros
router.get('/livros', async (req, res) => {
    try { 
        const livros = await Livro.findAll();
        res.json(livros);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar livros' });
    }
});

//Get livros por id
router.get('/livros/:id', async (req, res) => {
    try {
        const livro = await Livro.findByPk(req.params.id);
        if (livro) {
            res.json(livro);
        } else {
            res.status(404).json({ error: 'Livro não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar livro' });
    }
});

//metodo POST
router.post('/livros', async (req, res) => {
    try {
        const novoLivro = await Livro.create(req.body);
        res.status(201).json(novoLivro);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar livro' });
    }
});

//metodo PUT
router.put('/livros/:id', async (req, res) => {
    try {
        const livro = await Livro.findByPk(req.params.id);
        if (livro) {
            const livroAtualizado = await livro.update(req.body);
            res.json(livroAtualizado);
        } else {
            res.status(404).json({ error: 'Livro não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar livro' });
    }
});

//metodo DELETE
router.delete('/livros/:id', async (req, res) => {
    try {
        const livro = await Livro.findByPk(req.params.id);
        if (livro) {
            await livro.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Livro não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar livro' });
    }
});

module.exports = router;