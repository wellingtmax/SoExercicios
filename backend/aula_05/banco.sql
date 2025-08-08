CREATE DATABASE loja_play;
USE loja_play;

CREATE TABLE usuarios(
    id INT PRIMARY KEY auto_increment,
    login varchar(50) not null,
    senha varchar(25) not null
);