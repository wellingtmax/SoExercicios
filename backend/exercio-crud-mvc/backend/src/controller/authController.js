const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const authService = require("../service/authService");

class AuthController {
    async register(req, res) {
        try {
            const { nome, email, senha, telefone } = req.body;

            // Validação básica
            if (!nome || !email || !senha) {
                return res.status(400).json({
                    success: false,
                    message: "Nome, email e senha são obrigatórios"
                });
            }

            // Verificar se email já existe
            const userExists = await authService.findUserByEmail(email);
            if (userExists) {
                return res.status(400).json({
                    success: false,
                    message: "Email já está em uso"
                });
            }

            // Criar usuário
            const user = await authService.createUser({
                nome,
                email,
                senha,
                telefone
            });

            // Gerar tokens
            const { accessToken, refreshToken } = await authService.generateTokens(user.id);

            res.status(201).json({
                success: true,
                message: "Usuário criado com sucesso",
                data: {
                    user: {
                        id: user.id,
                        nome: user.nome,
                        email: user.email,
                        telefone: user.telefone
                    },
                    accessToken,
                    refreshToken
                }
            });

        } catch (error) {
            console.error("Erro ao registrar usuário:", error);
            res.status(500).json({
                success: false,
                message: "Erro interno do servidor"
            });
        }
    }

    async login(req, res) {
        try {
            const { email, senha } = req.body;

            // Validação básica
            if (!email || !senha) {
                return res.status(400).json({
                    success: false,
                    message: "Email e senha são obrigatórios"
                });
            }

            // Buscar usuário
            const user = await authService.findUserByEmail(email);
            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: "Credenciais inválidas"
                });
            }

            // Verificar senha
            const isValidPassword = await bcrypt.compare(senha, user.senha);
            if (!isValidPassword) {
                return res.status(401).json({
                    success: false,
                    message: "Credenciais inválidas"
                });
            }

            // Gerar tokens
            const { accessToken, refreshToken } = await authService.generateTokens(user.id);

            res.json({
                success: true,
                message: "Login realizado com sucesso",
                data: {
                    user: {
                        id: user.id,
                        nome: user.nome,
                        email: user.email,
                        telefone: user.telefone
                    },
                    accessToken,
                    refreshToken
                }
            });

        } catch (error) {
            console.error("Erro ao fazer login:", error);
            res.status(500).json({
                success: false,
                message: "Erro interno do servidor"
            });
        }
    }
}

module.exports = new AuthController();
