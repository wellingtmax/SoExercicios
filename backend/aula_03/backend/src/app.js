const express = require('express');
const cors = require('cors');
const app = express();
const clienteRoutes = require('./routes/ClienteRoutes');

app.use(cors());
app.use(express.json());

// Corrigido aqui 👇
app.use('/', clienteRoutes);

module.exports = app;
