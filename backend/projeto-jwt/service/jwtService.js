//jsonwebtoken, donten
const jwt = require('jsonwebtoken');
require('dotenv').config(); //carregando as variaveis do .env

//Gerar um token com dados do usuário e tempo de expiração
const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, login: user.login, role: user.role },
        process.env.JW_SECRET,
        { expiresIn: process.env.JW_EXPIRE_IN }
    )
}

//Verificar se o token JWT é válido
const verifyToken = (token) => {
    try{
        return jwt.verify(token, process.env.JW_SECRET)
    }catch(err){
        return null; // retorna nulo o token inválido
    }
}
module.exports = {generateToken, verifyToken}