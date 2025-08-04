const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'oficina'
});

conexao.connect((erro) => {
    if (erro) {
        console.log('❌ Erro ao conectar:', erro.message);
    } else {
        console.log('🚀 Conectado ao banco de dados!');
    }
});

module.exports = conexao;