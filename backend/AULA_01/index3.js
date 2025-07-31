const express = require('express')

//body-parse - paralidar com json no corpo da requisiÇões
const bodyParser = require('body-parser')
const db = require('./bd');

const app = express();
const PORT = 3006

app.use(bodyParser.json())


//visualizar dados na tabela - GET
app.get('/pessoas', (req, res) => {
    const sql = 'select * from pessoas'
    db.query(sql, (erro, resultado) => {
        if(erro) 
            return res.status(500).json({erro: 'Erro ao buscar dados'})
            res.json(resultado)
    })
});

//inserir dados na tabela - POST
app.post('/pessoas', (req, res) => {
    const { nome, sexo } = req.body;

    if (!nome || !sexo) {
        return res.status(400).json({ erro: 'Nome e sexo são obrigatórios' });
    }

    const sql = 'INSERT INTO pessoas (nome, sexo) VALUES (?, ?)';
    db.query(sql, [nome, sexo], (erro, resultado) => {
        if(erro) {
            return res.status(500).json({ erro: 'Erro ao inserir dados' });
        }
        res.status(201).json({ mensagem: 'Pessoa inserida com sucesso', id: resultado.insertId });
    });
});



//atualizar
app.put('/pessoas/:id', (req, res) => {
    const { id } = req.params
    const { nome, sexo } = req.body

    const sql = 'update pessoas set nome = ?, sexo = ? where id = ?'
    db.query(sql, [nome, sexo, id], (erro, resultado) => {
        if(erro) 
            return res.status(500).json({ erro: 'Erro ao ATUAALIZAR dados' });
            res.status(201).json({ mensagem: 'Pessoa ATUALIZADA com sucesso'});
    })
})


//deletar
app.delete('/pessoas/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM pessoas WHERE id = ?'

    db.query(sql, [id], (erro, resultado) => {
        if(erro) 
            return res.status(500).json({ erro: 'Erro ao DELETAR dados' });
            res.json({ mensagem: ' DELETADA com sucesso'});
    })

})


app.listen(PORT, () => {
    console.log(`Serviço rodando porta: ${PORT}`)
})
