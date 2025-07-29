-- Criar o banco
CREATE DATABASE IF NOT EXISTS e_cursos;
USE e_cursos;

-- Tabela Usuário (entidade genérica)
CREATE TABLE Usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

-- Tabela Aluno (especialização de Usuario)
CREATE TABLE Aluno (
    id_usuario INT PRIMARY KEY,
    data_matricula DATE,
    nivel_conhecimento VARCHAR(50),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario) ON DELETE CASCADE
);

-- Tabela Instrutor (especialização de Usuario)
CREATE TABLE Instrutor (
    id_usuario INT PRIMARY KEY,
    especialidade VARCHAR(100),
    bio TEXT,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario) ON DELETE CASCADE
);

-- Tabela Categoria
CREATE TABLE Categoria (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT
);

-- Tabela Curso
CREATE TABLE Curso (
    id_curso INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descricao TEXT,
    carga_horaria INT,
    id_categoria INT,
    id_instrutor INT,
    FOREIGN KEY (id_categoria) REFERENCES Categoria(id_categoria),
    FOREIGN KEY (id_instrutor) REFERENCES Instrutor(id_usuario)
);

-- Tabela Matricula (relaciona Aluno com Curso)
CREATE TABLE Matricula (
    id_matricula INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_curso INT,
    data_matricula DATE,
    status VARCHAR(50),
    FOREIGN KEY (id_usuario) REFERENCES Aluno(id_usuario),
    FOREIGN KEY (id_curso) REFERENCES Curso(id_curso),
    UNIQUE(id_usuario, id_curso) -- evita matricula duplicada no mesmo curso
);
