-- Script para criar a tabela de usuários e inserir dados de teste

-- Criar banco de dados se não existir
CREATE DATABASE IF NOT EXISTS loginnet;
USE loginnet;

-- Criar tabela de usuários
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') NOT NULL DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Inserir usuários de teste
INSERT INTO users (login, senha, role) VALUES 
('admin', 'admin123', 'admin'),
('user', 'user123', 'user'),
('wellington', 'senha123', 'admin'),
('joao', 'user456', 'user'),
('maria', 'maria789', 'user')
ON DUPLICATE KEY UPDATE 
    senha = VALUES(senha),
    role = VALUES(role);

-- Verificar dados inseridos
SELECT * FROM users;
