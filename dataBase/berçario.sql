CREATE DATABASE IF NOT EXISTS berçario_backend;
USE berçario_backend;
CREATE TABLE Mae (
    id_mae INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    endereco VARCHAR(255),
    telefone VARCHAR(20),
    data_nascimento DATE
);

CREATE TABLE Medico (
    crm VARCHAR(20) PRIMARY KEY,
    nome VARCHAR(100),
    telefone VARCHAR(20),
    especialidade VARCHAR(100)
);

CREATE TABLE Bebe (
    id_bebe INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    data_nascimento DATE,
    peso DECIMAL(5,2),
    altura DECIMAL(5,2),
    id_mae INT,
    crm_medico VARCHAR(20),
    FOREIGN KEY (id_mae) REFERENCES Mae(id_mae),
    FOREIGN KEY (crm_medico) REFERENCES Medico(crm)
);

CREATE TABLE Aluno (
    id_aluno INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100)
);

CREATE TABLE Trabalho (
    id_trabalho INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100)
);

CREATE TABLE Aluno_Trabalho (
    id_aluno INT,
    id_trabalho INT,
    PRIMARY KEY (id_aluno, id_trabalho),
    FOREIGN KEY (id_aluno) REFERENCES Aluno(id_aluno),
    FOREIGN KEY (id_trabalho) REFERENCES Trabalho(id_trabalho)
);
