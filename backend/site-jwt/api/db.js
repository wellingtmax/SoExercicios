const mysql = require('mysql2/promise');
require('dotenv').config();

let connection;

(async () => {
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306
    });
    console.log('✅ Conectado ao banco de dados MySQL');
  } catch (err) {
    console.error('❌ Erro ao conectar com o banco de dados:', err.message);
  }
})();

const query = async (sql, params = []) => {
  if (!connection) throw new Error('⚠ Banco de dados não conectado');
  const [rows] = await connection.execute(sql, params);
  return rows;
};

module.exports = { query };

