const service = require('../service/authService');

const register = (req, res) => {
    const {login, senha} = req.body;
    
    // Validação básica
    if (!login || !senha) {
        return res.status(400).json({erro: 'Login e senha são obrigatórios'})
    }
    
    service.register(login, senha, (erro, resultado) => {
        if(erro)
            return res.status(500).json({erro: erro})
        res.status(201).json({ 
            mensagem: 'Usuario registrado com sucesso!'
        })
    })
}

const login = ( req, res) => {
    const {login, senha} = req.body;

    service.login(login, senha, (erro, resultado) => {
        if(erro)
            return res.status(401).json({erro: erro})

        res.status(200).json({
            mensagem: 'Login realizado com sucesso!!',
            token: resultado.token,
            usuario: resultado.usuario
        })
    })
}

module.exports = { register, login }