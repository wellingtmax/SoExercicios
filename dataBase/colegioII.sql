-- Criar banco de dados
CREATE DATABASE colegioII;
-- ====================================================================
USE colegioII;
-- ====================================================================
-- Tabela Aluno
CREATE TABLE Aluno (
    id_aluno INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    idade INT
);
-- ====================================================================
-- Tabela Curso
CREATE TABLE Curso (
    id_curso INT PRIMARY KEY AUTO_INCREMENT,
    nome_curso VARCHAR(100)
);
-- ====================================================================
-- Tabela Matricula (relacionamento entre Aluno e Curso)
CREATE TABLE Matricula (
    id_matricula INT PRIMARY KEY AUTO_INCREMENT,
    id_aluno INT,
    id_curso INT,
    ano_letivo INT,
    FOREIGN KEY (id_aluno) REFERENCES Aluno(id_aluno),
    FOREIGN KEY (id_curso) REFERENCES Curso(id_curso)
);
-- ====================================================================
-- inserir dados
-- Inserir Alunos
INSERT INTO Aluno (nome, idade) VALUES 
('João Silva', 15),
('Maria Oliveira', 16),
('Luciana Oliveira', 11),
('Mario silvo', 21),
('Carlos Souza', 17);  -- Este aluno não será matriculado (para testar LEFT JOIN)
-- ====================================================================
-- Inserir Cursos
INSERT INTO Curso (nome_curso) VALUES 
('Matemática'),
('História'),
('Biologia');  -- Este curso ficará sem alunos (para testar RIGHT JOIN)
-- ====================================================================
-- Inserir Matrículas
INSERT INTO Matricula (id_aluno, id_curso, ano_letivo) VALUES
(1, 1, 2024),  -- João em Matemática
(7, 2, 2024),
(8, 2, 2024),
(6, 2, 2024),
(4, 3, 2024),   -- João em História
(2, 1, 2024);  -- Maria em Matemática
-- ====================================================================
SELECT 
a.nome, b.nome FROM 
tabelaA as A 
right join 
tabelaB as B 
on a.nome = b.nome;
-- ====================================================================
SELECT 
a.nome As Nome, c.nome_curso As Curso 
FROM 
Aluno A
join Matricula m on a.id_aluno = m.id_aluno
join Curso c on a.id_aluno = m.id_aluno;
-- ====================================================================
SELECT 
a.nome As Nome, c.nome_curso As Curso
FROM 
Aluno A
join Matricula m on a.id_aluno = m.id_aluno
join Curso c on a.id_aluno = m.id_aluno;
-- ====================================================================
SELECT 
a.nome As Nome, COUNT(m.id_curso) as Total_curso
FROM aluno a
LEFT join Matricula m on a.id_aluno = m.id_aluno
GROUP BY a.id_aluno;
-- ====================================================================
SELECT 
Curso.nome_curso, 
Aluno.nome AS nome_aluno
FROM 
Matricula
JOIN 
Curso ON Matricula.id_curso = Curso.id_curso
JOIN 
Aluno ON Matricula.id_aluno = Aluno.id_aluno
ORDER BY 
Curso.nome_curso;
-- ====================================================================
SELECT 
Curso.nome_curso, 
Aluno.nome AS nome_aluno
FROM 
Curso
LEFT JOIN 
Matricula ON Curso.id_curso = Matricula.id_curso
LEFT JOIN 
Aluno ON Matricula.id_aluno = Aluno.id_aluno
ORDER BY 
Curso.nome_curso;
-- ====================================================================
CREATE VIEW curso_alunos AS
SELECT 
Curso.nome_curso, 
Aluno.nome AS nome_aluno
FROM 
Matricula
JOIN 
Curso ON Matricula.id_curso = Curso.id_curso
JOIN 
Aluno ON Matricula.id_aluno = Aluno.id_aluno;
-- ====================================================================
SELECT * FROM curso_alunos;
-- ====================================================================
SELECT * FROM matricula



