CREATE DATABASE cadastro;
use cadastro;

CREATE TABLE cliente(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100),
CPF VARCHAR(15)
);

SELECT * FROM cliente;

INSERT INTO cliente (nome, CPF)
VALUES ('João da Silva', '125.362.987-90');

