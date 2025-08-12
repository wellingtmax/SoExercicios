const express = require('express');
const cors = require('cors');
const app = express();
const gameRouter = require('./src/routes/gameRouter');
const dotenv = require('dotenv');

dotenv.config();

app.use(cors()); // habilita CORS
app.use(express.json());
app.use('/api', gameRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
