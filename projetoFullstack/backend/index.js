const express = require('express');
const sequelize = require('./database/db');
const cors = require('cors');
const livroControllers = require('./controllers/livroControllers');
const e = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api', livroControllers);

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        await sequelize.sync();// cria a tabela la no banco de dados se não existir

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
            console.log(`Acesse a API em http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
    
}

startServer();