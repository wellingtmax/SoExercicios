-- Banco de dados: oficina
-- Tabela: Cliente

CREATE DATABASE IF NOT EXISTS oficina;
USE oficina;

CREATE TABLE IF NOT EXISTS Cliente (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    cpf VARCHAR(15),
    sexo VARCHAR(10)
);

-- Inserir dados de exemplo
INSERT INTO Cliente (nome, cpf, sexo) VALUES
('João Silva', '111.111.111-11', 'Masculino'),
('Maria Oliveira', '222.222.222-22', 'Feminino'),
('Carlos Souza', '333.333.333-33', 'Masculino'),
('Marina Souza', '555.555.555-55', 'Feminino');

-- Visualizar dados
SELECT * FROM Cliente;
