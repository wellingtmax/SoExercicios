CREATE DATABASE empresa3;
USE empresa3;

CREATE TABLE cliente(
    id INT PRIMARY KEY auto_increment,
    nome VARCHAR(100),
    cpf VARCHAR(15)
);

INSERT INTO cliente (nome, cpf) VALUE
('Marcia Rodrigues', '125.542.957-69')
('Sonia Maria', '254.954.365-21')

