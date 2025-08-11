const db = require('../db');


//exibir tabela de usuários
exports.getAllUsers = (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error('❌❌❌ ERRO ao buscar usuários:', err);
      return res.status(500).json({ error: 'Erro do servidor' });
    }
    res.json(results);
  });
};

//criar tabela de usuários
exports.createUser = (req, res) => {
  const { nome, email } = req.body;
  db.query('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nome, email], (err, results) => {
    if (err) {
      console.error('❌❌❌ ERRO ao criar usuário:', err);
      return res.status(500).json({ error: 'Erro do servidor' });
    }
    res.status(201).json({ id: results.insertId, nome, email });
  });
};

//atualizar tabela de usuários
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  db.query('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (err, results) => {
    if (err) {
      console.error('❌❌❌ ERRO ao atualizar usuário:', err);
      return res.status(500).json({ error: 'Erro do servidor' });
    }
    res.json({ id, nome, email });
  });
};

//deletar usuario
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM usuarios WHERE id = ?', [id], (err, results) => {
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
  db.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, results) => {
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
