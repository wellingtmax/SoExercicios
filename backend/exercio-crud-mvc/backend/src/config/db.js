const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if(err) {
        console.log('❌ Erro ao conectar no MYSQL:', err.message);
    } else {
        console.log('✅ Conectado ao DATABASE MSQL');
    }
});

module.exports = db;