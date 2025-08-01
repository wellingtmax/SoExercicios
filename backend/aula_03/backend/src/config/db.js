const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'empresa3'
});

conexao.connect((err) => {
    if (err) {
        console.log('❌ Erro ao conectar:', err.message);
    } else {
        console.log('✅ Conectado ao banco');
    }
});

module.exports = conexao;
