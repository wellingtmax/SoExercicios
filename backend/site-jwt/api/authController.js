const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { query } = require('./db');
require('dotenv').config();

// Cadastro
exports.register = async (req, res) => {
  const { usuario, senha, perfil } = req.body;
  try {
    const rows = await query('SELECT * FROM usuario WHERE usuario = ?', [usuario]);
    if (rows.length > 0) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    const salt = await bcrypt.genSalt(10);
    const senhaHash = await bcrypt.hash(senha, salt);
    
    const result = await query(
      'INSERT INTO usuario (usuario, senha, perfil) VALUES (?, ?, ?)',
      [usuario, senhaHash, perfil]
    );

    res.status(201).json({ 
      message: 'Usuário registrado com sucesso', 
      userId: result.insertId 
    });
  } catch (error) {
    console.error('❌ Erro ao registrar usuário:', error.message);
    res.status(500).json({ message: 'Erro ao registrar usuário' });
  }
};

// Login
exports.login = async (req, res) => {
  const { usuario, senha } = req.body;
  try {
    const rows = await query('SELECT * FROM usuario WHERE usuario = ?', [usuario]);
    if (rows.length === 0) {
      return res.status(400).json({ message: 'Usuário ou senha inválidos' });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) {
      return res.status(400).json({ message: 'Usuário ou senha inválidos' });
    }

    const token = jwt.sign(
      { userId: user.id, perfil: user.perfil }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    res.json({ 
      token, 
      user: { 
        id: user.id, 
        usuario: user.usuario, 
        perfil: user.perfil 
      } 
    });
  } catch (error) {
    console.error('❌ Erro ao fazer login:', error.message);
    res.status(500).json({ message: 'Erro ao fazer login' });
  }
};

// Pegar perfil do usuário logado
exports.getProfile = async (req, res) => {
  try {
    const rows = await query('SELECT id, usuario, perfil FROM usuario WHERE id = ?', [req.user.userId]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.json({ user: rows[0] });
  } catch (error) {
    console.error('❌ Erro ao buscar perfil:', error.message);
    res.status(500).json({ message: 'Erro ao buscar perfil' });
  }
};


