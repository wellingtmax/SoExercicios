CREATE DATABASE empresa3;
USE empresa3;

CREATE TABLE cliente(
    id INT PRIMARY KEY auto_increment,
    nome VARCHAR(100),
    cpf VARCHAR(15)
);

INSERT INTO cliente (nome, cpf) VALUE
('Motta Rodrigues', '125.542.957-69'),
('Soraia Rodrigues', '588.654.721-36'),
('Fernanda Rodrigues', '586.236.957-88'),
('Jilo Rodrigues', '124.698.742-00'),
('Marcia Rodrigues', '789.89.957-78'),
('Sonia Maria', '254.954.365-21');

select * from cliente;

DROP TABLE cliente;

