const db = require('../database/db');
const { generateToken } = require('../service/jwtService');
const { validaPassword } = require('../service/decryptService');


const login = (req, res) => {
    const { login, senha } =req.body;
    const sql = 'SELECT * FROM users WHERE login = ?';
    db.query(sql, [login], (err, results) => {
        if (err) {
            console.error('❌ Erro ao buscar usuário:', err);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
        if (results.length === 0) {
            return res.status(401).json({ error: 'Usuário não encontrado' });
        }
        const user = results[0];
        if (!validaPassword(senha, user.senha)) {
            return res.status(401).json({ error: 'Senha incorreta' });
        }
        const token = generateToken(user);
        return res.json({ token, role: user.role });
    });
}

module.exports = {
    login
};
