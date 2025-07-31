const mysql = require('mysql2')


const conexao = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'sistemas'
});

// error
conexao.connect((erro) => {
    if(erro){
        console.log('Erro de conecção do banco', erro)
    } else {
        console.log('Conectado ao banco de dados')
    }
});

module.exports = conexao