CREATE DATABASE senai_auth;
USE senai_auth;

CREATE TABLE usuario(
    id int PRIMARY KEY AUTO_INCREMENT,
    usuario VARCHAR(100) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    perfil VARCHAR(10) NOT NULL
);