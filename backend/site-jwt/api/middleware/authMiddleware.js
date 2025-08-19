const jwt = require('jsonwebtoken');
require('dotenv').config();

// Verificar token
exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(403).json({ error: 'Token não fornecido' });

  const token = authHeader.split(' ')[1]; // remove "Bearer "
  if (!token) return res.status(403).json({ error: 'Token não fornecido' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};

// Verificar perfil
exports.verifyProfile = (perfil) => {
  return (req, res, next) => {
    if (req.user.perfil !== perfil) {
      return res.status(403).json({ error: 'Acesso negado: perfil não autorizado' });
    }
    next();
  };
};



