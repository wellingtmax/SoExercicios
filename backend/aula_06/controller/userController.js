const db = require('../db');


//exibir tabela de usuários
exports.getAllUsers = (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('❌❌❌ ERRO ao buscar usuários:', err);
      return res.status(500).json({ error: 'Erro do servidor' });
    }
    res.json(results);
  });
};

//criar tabela de usuários
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, results) => {
    if (err) {
      console.error('❌❌❌ ERRO ao criar usuário:', err);
      return res.status(500).json({ error: 'Erro do servidor' });
    }
    res.status(201).json({ id: results.insertId, name, email });
  });
};

//atualizar tabela de usuários
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], (err, results) => {
    if (err) {
      console.error('❌❌❌ ERRO ao atualizar usuário:', err);
      return res.status(500).json({ error: 'Erro do servidor' });
    }
    res.json({ id, name, email });
  });
};

//deletar usuario
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('❌❌❌ ERRO ao deletar usuário:', err);
      return res.status(500).json({ error: 'Erro do servidor' });
    }
    res.status(204).send();
  });
};

//buscar usuário por ID
exports.getUserById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('❌❌❌ ERRO ao buscar usuário por ID:', err);
      return res.status(500).json({ error: 'Erro do servidor' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json(results[0]);
  });
};
