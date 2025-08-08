-- Script para criar o banco de dados e tabela de produtos

-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS loja;
USE loja;

-- Criar tabela produtos
CREATE TABLE IF NOT EXISTS produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    preco DECIMAL(10,2),
    estoque INT,
    imagem VARCHAR(255) DEFAULT NULL
);

-- Inserir alguns dados de exemplo
INSERT INTO produtos (nome, preco, estoque) VALUES 
('Camiseta Tech', 49.90, 100),
('Teclado Mecânico', 299.99, 50),
('Mouse Gamer', 129.90, 80),
('Notebook i7', 4500.00, 20),
('Fone Bluetooth', 199.50, 60);

-- Verificar se os dados foram inseridos
SELECT * FROM produtos;
