-- Criar banco de dados
-- CREATE DATABASE colegio;
-- USE colegio;

-- Tabela Aluno
-- CREATE TABLE Aluno (
--     id_aluno INT PRIMARY KEY AUTO_INCREMENT,
--     nome VARCHAR(100),
--     idade INT
-- );

-- Tabela Curso
-- CREATE TABLE Curso (
--     id_curso INT PRIMARY KEY AUTO_INCREMENT,
--     nome_curso VARCHAR(100)
-- );

-- Tabela Matricula (relacionamento entre Aluno e Curso)
-- CREATE TABLE Matricula (
--     id_matricula INT PRIMARY KEY AUTO_INCREMENT,
--     id_aluno INT,
--     id_curso INT,
--     ano_letivo INT,
--     FOREIGN KEY (id_aluno) REFERENCES Aluno(id_aluno),
--     FOREIGN KEY (id_curso) REFERENCES Curso(id_curso)
-- );


-- inserir dados
-- Inserir Alunos
-- INSERT INTO Aluno (nome, idade) VALUES 
-- ('João Silva', 15),
-- ('Maria Oliveira', 16),
-- ('Carlos Souza', 17);  -- Este aluno não será matriculado (para testar LEFT JOIN)

-- Inserir Cursos
-- INSERT INTO Curso (nome_curso) VALUES 
-- ('Matemática'),
-- ('História'),
-- ('Biologia');  -- Este curso ficará sem alunos (para testar RIGHT JOIN)

-- Inserir Matrículas
-- INSERT INTO Matricula (id_aluno, id_curso, ano_letivo) VALUES
-- (1, 1, 2024),  -- João em Matemática
-- (1, 2, 2024),  -- João em História
-- (2, 1, 2024);  -- Maria em Matemática



