const express = require('express');
const cors = require('cors');
const authController = require('./authController');
const authMiddleware = require('./middleware/authMiddleware');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

// Rotas públicas
app.post('/register', authController.register);
app.post('/login', authController.login);

// Rotas protegidas
app.get('/protected', authMiddleware.verifyToken, (req, res) => {
  // Extrair o token do header Authorization
  const token = req.headers.authorization?.split(' ')[1];
  
  res.json({ 
    message: 'Acesso autorizado!', 
    user: req.user,
    token: token
  });
});

app.get('/profile', authMiddleware.verifyToken, authController.getProfile);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse http://localhost:${PORT}`);
});




