const mysql =require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createConnection({
     host: process.env.DB_HOST,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_NAME,
     port: process.env.DB_PORT || 3306 // Default to 3306 if not specified
});

db.connect((err) => {
    if (err) {
        console.log("Erro na conexão", err)
    } else {
        console.log('🚀 DATABASE CONECTADO🚀')
    }
})

module.exports = db