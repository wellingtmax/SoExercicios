//conectando com meu env no meu banco de dados
//aprendendo usar com .env
//referenciando meu .env onde esta minhas credenciais do meu banco
//montando minha variavel do msql
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
//conecxão ao banco de dados na porta 3000
const app = express();
app.use(express.json())
const PORT = 3000;
const cors = require('cors');
app.use(cors());

//transformando meu .env em variaveis para usar no index
//montando minha conexão para usar no processo de conexao com o banco
const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
// montando a conexão com o banco
//colocando tratamento de erro para uma conexão
conexao.connect((erro) => {
    if (erro) {
        console.log('ERRO AO CONECTAR AO DATABASE', erro.message);
    } else {
        console.log('✅CONEXAO BEM SUCEDIDAD AO DATABASE "cadastro"');
    }
});
// CRIANDO ROTA DE TEST
// app.get('/', (req, res) => {
//     res.send('🚀 Backend funcinando! Conectado ao DATABASE!')
// })
//==================================================================================================
// iniciando servidor
app.listen(PORT, () => {
    console.log(`🌍 Servidor rodando em: http://localhost:${PORT}`)
})
//========================================================================================================
//crinado GET
//usando '''''select * from cliente''''' do banco para visualizar todos
app.get('/clientes', (req, res) => {
    const sql = 'SELECT * FROM cliente';
    conexao.query(sql, (erro, resultados) => {
        if (erro) {
            res.status(500).send('Erro ao buscar clientes: ' + erro.message);
        } else {
            res.json(resultados);
        }
    });
});

//criando POST
//usando insert ''''''into cliente (nome,CPF) values(?, ?)''''''
//para adicionar mais clientes
app.post('/clientes', (req, res) => {
    const { nome, CPF } = req.body;

    const sql = 'INSERT INTO cliente (nome, CPF) VALUES (?, ?)';
    conexao.query(sql, [nome, CPF], (erro, resultado) => {
        if (erro) {
            res.status(500).send('Erro ao inserir cliente: ' + erro.message);
        } else {
            res.status(201).send(`Cliente inserido com ID: ${resultado.insertId}`);
        }
    });
});

//criando PUT
// usando '''''udapte cliente set nome = ?, CPF = ? where id = ?'''''
// com parametro de id para atualizar os dados ja inseridos
app.put('/clientes/:id', (req, res) => {
    const { id } = req.params;
    const { nome, CPF } = req.body;

    const sql = 'UPDATE cliente SET nome = ?, CPF = ? WHERE id = ?';
    conexao.query(sql, [nome, CPF, id], (erro, resultado) => {
        if (erro) {
            res.status(500).send('Erro ao atualizar cliente: ' + erro.message);
        } else {
            res.send(`Cliente com ID ${id} atualizado com sucesso!`);
        }
    });
});

//criando DELETE
//usando '''''delete from cliente where id = ?'''''
// tbm usando parametro de id
// para deletar um cliente
app.delete('/clientes/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM cliente WHERE id = ?';
    conexao.query(sql, [id], (erro, resultado) => {
        if (erro) {
            res.status(500).send('Erro ao deletar cliente: ' + erro.message);
        } else {
            res.send(`Cliente com ID ${id} foi removido!`);
        }
    });
});
