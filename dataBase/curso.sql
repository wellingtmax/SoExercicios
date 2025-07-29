-- Exercício com consultas usando JOIN
-- Criar banco de dados
CREATE DATABASE curso;
USE curso;
-- ====================================================================
-- Tabela Aluno
CREATE TABLE Aluno (
 id_aluno INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(100)
);
-- ====================================================================
-- Tabela Disciplina
CREATE TABLE Disciplina (
 id_disciplina INT PRIMARY KEY AUTO_INCREMENT,
 nome_disciplina VARCHAR(100)
);
-- ====================================================================
-- Tabela Inscricao
CREATE TABLE Inscricao (
 id_inscricao INT PRIMARY KEY AUTO_INCREMENT,
 id_aluno INT,
 id_disciplina INT,
 FOREIGN KEY (id_aluno) REFERENCES Aluno(id_aluno),
 FOREIGN KEY (id_disciplina) REFERENCES Disciplina(id_disciplina)
);
-- ====================================================================
-- Alunos
INSERT INTO Aluno (nome) VALUES 
('Alice'),
('Bruno'),
('Carla');
-- ====================================================================
-- Disciplinas
INSERT INTO Disciplina (nome_disciplina) VALUES 
('Banco de Dados'),
('Lógica de Programação');
-- ====================================================================
-- Inscrições
INSERT INTO Inscricao (id_aluno, id_disciplina) VALUES
(1, 1), -- Alice em Banco de Dados
(2, 2); -- Bruno em Lógica de Programação
-- Carla não está inscrita em nenhuma disciplina
-- Banco de Dados tem Alice, Lógica tem Bruno
-- ==============================1======================================
SELECT 
    Aluno.nome AS nome_aluno,
    Disciplina.nome_disciplina
FROM 
    Inscricao
JOIN 
    Aluno ON Inscricao.id_aluno = Aluno.id_aluno
JOIN 
    Disciplina ON Inscricao.id_disciplina = Disciplina.id_disciplina;
-- ==========================2==========================================
    SELECT 
    Aluno.nome AS nome_aluno,
    Disciplina.nome_disciplina
FROM 
    Aluno
LEFT JOIN 
    Inscricao ON Aluno.id_aluno = Inscricao.id_aluno
LEFT JOIN 
    Disciplina ON Inscricao.id_disciplina = Disciplina.id_disciplina;
-- ==========================3=========================================
SELECT 
    Aluno.nome AS nome_aluno,
    Disciplina.nome_disciplina
FROM 
    Aluno
RIGHT JOIN 
    Inscricao ON Aluno.id_aluno = Inscricao.id_aluno
RIGHT JOIN 
    Disciplina ON Inscricao.id_disciplina = Disciplina.id_disciplina;
-- ==========================4==========================================
SELECT 
    Aluno.nome AS nome_aluno,
    Inscricao.id_inscricao
FROM 
    Aluno
LEFT JOIN 
    Inscricao ON Aluno.id_aluno = Inscricao.id_aluno;
-- ===========================5=========================================
SELECT 
    Disciplina.nome_disciplina,
    Aluno.nome AS nome_aluno
FROM 
    Inscricao
JOIN 
    Disciplina ON Inscricao.id_disciplina = Disciplina.id_disciplina
JOIN 
    Aluno ON Inscricao.id_aluno = Aluno.id_aluno;
-- ===========================6=========================================
SELECT 
    Disciplina.nome_disciplina,
    Aluno.nome AS nome_aluno
FROM 
    Aluno
RIGHT JOIN 
    Inscricao ON Aluno.id_aluno = Inscricao.id_aluno
RIGHT JOIN 
    Disciplina ON Inscricao.id_disciplina = Disciplina.id_disciplina;
-- ===========================7=========================================
SELECT 
    Aluno.nome AS nome_aluno
FROM 
    Aluno
LEFT JOIN 
    Inscricao ON Aluno.id_aluno = Inscricao.id_aluno
WHERE 
    Inscricao.id_inscricao IS NULL;
-- ===========================8=========================================
SELECT 
    Aluno.nome AS nome_aluno,
    COUNT(Inscricao.id_disciplina) AS total_disciplinas
FROM 
    Aluno
LEFT JOIN 
    Inscricao ON Aluno.id_aluno = Inscricao.id_aluno
GROUP BY 
    Aluno.id_aluno, Aluno.nome;
