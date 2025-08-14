const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRotes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sistema rodando na porta ${PORT}`);
    console.log(`Sistema rodando na URL http://localhost:${PORT}/api/auth`);
});

