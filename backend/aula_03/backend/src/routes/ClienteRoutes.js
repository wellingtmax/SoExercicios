const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Corrigido aqui 👇
router.get('/clientes', (req, res) => {
    const sql = 'SELECT * FROM cliente';
    db.query(sql, (err, result) => {
        if (err) 
            return res.status(500).json({ erro: 'Erro ao conectar' });
        res.json(result);
    });
});

module.exports = router;
