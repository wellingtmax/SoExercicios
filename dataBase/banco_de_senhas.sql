CREATE DATABASE loja_play;
USE loja_play;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    login VARCHAR(50) NOT NULL,
    senha VARCHAR(100) NOT NULL
);


ALTER TABLE usuarios MODIFY senha VARCHAR(100);


SELECT * FROM usuarios;
