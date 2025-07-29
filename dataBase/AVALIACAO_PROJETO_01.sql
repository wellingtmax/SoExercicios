CREATE DATABASE clinica_vida_saudavel;
use clinica_vida_saudavel;
-- ============================================================
CREATE TABLE paciente(
ID_Paciente INT KEY AUTO_INCREMENT,
Nome VARCHAR(100),
CPF VARCHAR(15),
Data_Nascimento VARCHAR(15),
Telefone VARCHAR(15)
);
-- ================================================================
CREATE TABLE Medico(
ID_Medico INT KEY AUTO_INCREMENT,
Nome VARCHAR(100),
CRM VARCHAR(15),
Especialidade VARCHAR(100),
Telefone VARCHAR(15)
);
-- =====================================================================
CREATE TABLE consulta (
    id_consulta INT PRIMARY KEY AUTO_INCREMENT,
    data DATE,
    horario TIME,
    id_paciente INT,
    id_medico INT,
    FOREIGN KEY (id_paciente) REFERENCES paciente(id_paciente),
    FOREIGN KEY (id_medico) REFERENCES medico(id_medico)
);
-- =======================================================================
CREATE TABLE receita (
    id_receita INT PRIMARY KEY AUTO_INCREMENT,
    descricao TEXT,
    data_emissao DATE,
    id_consulta INT UNIQUE,
    FOREIGN KEY (id_consulta) REFERENCES consulta(id_consulta)
);
-- ===================================================================================
-- Pacientes
INSERT INTO paciente (Nome, CPF, Data_Nascimento, Telefone) VALUES
('Hot', '826.194.037-31', '2003-01-02', '84 3908-9902'),
('Francisco','254.365.958-36', '1987-02-05', '21 99965-2545'),
('Marcela','258.456.355-32', '1968-05-21', '23 96584-3652'),
('Milioti','365.896.254-25', '1956-05-15', '21 98672-3257'),
('Jhonatan','412.154.478-63', '2000-08-11', '21 95642-9874'),
('Laureccini','147.458.789-32', '2001-09-14', '21 99854-9857'),
('Evandro','159.478.523-22', '2003-07-17', '21 98874-3654'),
('Groopo','785.896.752-11', '1999-06-05', '21 98756-9875'),
('Torres','256.889.888-88', '1996-04-09', '21 96854-9654'),
('Leite','111.222.333-44', '1955-04-07', '21 96325-6524'),
('Oliveira','528.789.454-45', '1935-03-15', '21 99854-3659'),
('Farias','639.964.634-32', '1984-01-30', '21 99632-9875'),
('Cristovão','023.859.555-55', '1975-01-04', '21 99897-9874'),
('Motta','563.778.854-25', '1965-03-08', '21 99874-3652'),
('Luiz','142.233.389-99', '1945-03-15', '21 99923-2314'),
('Jardim','254.365.958-55', '1978-08-19', '21 99124-3669'),
('Assis','258.557.666-87', '1975-07-20', '21 99124-3698'),
('Pagliacci','145.777.958-98', '1982-07-25', '21 99684-2547'),
('Gil','478.785.987-75', '1963-05-17', '21 99684-3698'),
('Reynato','023.369.958-75', '1944-07-23', '21 99989-2547');

INSERT INTO paciente (Nome, CPF, Data_Nascimento, Telefone) VALUES (
'Dr. Gustavo Moraes', '530.981.467-10', '1953-09-25', '21 3622 1629'
);
INSERT INTO paciente (Nome, CPF, Data_Nascimento, Telefone) 
VALUES (
'Alícia Correia', '543.601.928-51', '1977-08-19', '11 3904 2774'
);
-- ==================================================================

-- Médicos
INSERT INTO medico (Nome, CRM, Especialidade, Telefone) VALUES
('Bruna Castro', '4364475-SP', 'Cardiologista', '27 8255-7826'),
('Dr. Gustavo Moraes', '7583221-RJ', 'Clínico Geral', '21 3622-1629'),
('Fernanda Lima', '2231547-SP', 'Dermatologista', '11 99856-7412'),
('Carlos Eduardo', '3689742-MG', 'Ortopedista', '31 98451-3254'),
('Patrícia Souza', '1247859-BA', 'Endocrinologista', '71 99123-7845'),
('Lucas Fernandes', '8596471-RJ', 'Pediatra', '21 98765-4321'),
('Juliana Rocha', '9987456-SP', 'Neurologista', '11 99632-7854');

-- ========================================================================

-- Consultas
INSERT INTO consulta (Data, Horario, ID_Paciente, ID_Medico) VALUES
('2025-06-17', '08:19:22', 5, 2),
('2025-06-18', '09:30:00', 3, 1),
('2025-06-19', '14:00:00', 10, 3),
('2025-06-20', '15:15:00', 7, 4),
('2025-06-21', '10:45:00', 12, 5),
('2025-06-22', '13:30:00', 1, 6),
('2025-06-23', '11:00:00', 8, 7),
('2025-06-24', '08:00:00', 2, 1),
('2025-06-25', '16:20:00', 6, 2),
('2025-06-26', '17:10:00', 4, 3);

-- ==========================================================================

-- Receitas
INSERT INTO receita (Descricao, Data_Emissao, ID_Consulta) VALUES
('Tomar comprimido após almoço', '2025-07-21', 1),
('Uso tópico duas vezes ao dia', '2025-07-22', 2),
('Injetar vitamina semanalmente', '2025-07-23', 3),
('Evitar exercícios físicos por 7 dias', '2025-07-24', 4),
('Antibiótico por 5 dias após refeição', '2025-07-25', 5),
('Controlar glicose com dieta e exercício', '2025-07-26', 6),
('Usar colírio de 8 em 8 horas', '2025-07-27', 7),
('Revisão com exames de sangue em 15 dias', '2025-07-28', 8),
('Reposição de ferro por 30 dias', '2025-07-29', 9),
('Tomar analgésico ao sentir dor', '2025-07-30', 10);

-- ============================== consultas com SELECT e WHERE===========================================
-- 1. Listar pacientes com nome 'João'
SELECT * FROM paciente WHERE Nome = 'João';

-- 2. Consultas do médico com ID 1
SELECT * FROM consulta WHERE id_medico = 1;
-- ======================== consultas com GROUP BY e ORDER BY com funções de agregação =================================================
-- 3. Total de consultas por médico
SELECT id_medico, COUNT(*) AS total_consultas
FROM consulta
GROUP BY id_medico
ORDER BY total_consultas DESC;

-- 4. Número de receitas por data de emissão
SELECT data_emissao, COUNT(*) AS qtd_receitas
FROM receita
GROUP BY data_emissao
ORDER BY data_emissao;
-- ==========================consultas com operadores aritméticos (+, -, *, /) =============================================
-- 5. Simulação de idade de pacientes (ano atual - ano de nascimento)
SELECT Nome, (YEAR(CURDATE()) - YEAR(STR_TO_DATE(Data_Nascimento, '%Y-%m-%d'))) AS idade
FROM paciente;

-- 6. Tempo total de consulta em minutos (exemplo fictício: considerando todas de 30 min)
SELECT id_consulta, TIME_TO_SEC(horario)/60 + 30 AS tempo_estimado
FROM consulta;
-- =============================consultas com operadores de comparação (=, !=, <, >, etc.) ==========================================
-- 7. Pacientes com CPF diferente de '000.000.000-00'
SELECT * FROM paciente WHERE CPF != '000.000.000-00';

-- 8. Consultas após uma certa data
SELECT * FROM consulta WHERE data > '2025-01-01';

-- 9. Médicos com nome maior que 10 caracteres
SELECT * FROM medico WHERE LENGTH(Nome) > 10;

-- ============================ consultas com operadores lógicos (AND, OR) ===========================================
-- 10. Médicos com especialidade 'Cardiologia' e CRM específico
SELECT * FROM medico WHERE Especialidade = 'Cardiologia' AND CRM = '123456';

-- 11. Consultas do paciente 1 ou do paciente 2
SELECT * FROM consulta WHERE id_paciente = 1 OR id_paciente = 2;

-- 12. Pacientes com nome João e CPF preenchido
SELECT * FROM paciente WHERE Nome = 'João' AND CPF IS NOT NULL;

-- ============================consultas com operadores lógicos e negação (NOT) ===========================================
-- 13. Pacientes que não têm telefone cadastrado
SELECT * FROM paciente WHERE NOT Telefone IS NOT NULL;

-- 14. Consultas que não foram realizadas por médico 3
SELECT * FROM consulta WHERE NOT id_medico = 3;

-- =========================== consultas com operadores auxiliares (IS NULL, BETWEEN, LIKE, IN) ============================================
-- 13. Pacientes que não têm telefone cadastrado
SELECT * FROM paciente WHERE NOT Telefone IS NOT NULL;

-- 14. Consultas que não foram realizadas por médico 3
SELECT * FROM consulta WHERE NOT id_medico = 3;

-- ============================= consultas com funções de agregação (SUM(), AVG(), etc.) ==========================================
-- 15. Pacientes com telefone NULL
SELECT * FROM paciente WHERE Telefone IS NULL;

-- 16. Consultas entre duas datas
SELECT * FROM consulta WHERE data BETWEEN '2025-01-01' AND '2025-12-31';

-- 17. Médicos com nomes começando com 'A'
SELECT * FROM medico WHERE Nome LIKE 'A%';
-- ============================= consultas com funções de datas (NOW(), DATE(), YEAR(), etc.)  ==========================================
-- 18. Total de consultas realizadas
SELECT COUNT(*) AS total_consultas FROM consulta;

-- 19. Média de consultas por médico
SELECT AVG(qtd) AS media_consultas
FROM (
  SELECT COUNT(*) AS qtd
  FROM consulta
  GROUP BY id_medico
) AS sub;

-- 20. Total de receitas emitidas
SELECT COUNT(*) AS total_receitas FROM receita;


-- ============================= consultas com funções de agregação (SUM(), AVG(), etc.) ==========================================
-- 21. Consultas realizadas hoje
SELECT * FROM consulta WHERE data = CURDATE();

-- 22. Consultas do ano atual
SELECT * FROM consulta WHERE YEAR(data) = YEAR(CURDATE());

-- ============================= sub-consultas com agrupamento e união de dados ==========================================
-- 23. Pacientes com mais de uma consulta
SELECT * FROM paciente
WHERE ID_Paciente IN (
  SELECT id_paciente FROM consulta GROUP BY id_paciente HAVING COUNT(*) > 1
);

-- 24. Médicos que emitiram receita
SELECT * FROM medico
WHERE ID_Medico IN (
  SELECT id_medico FROM consulta
  WHERE id_consulta IN (SELECT id_consulta FROM receita)
);

-- 25. União de nomes de médicos e pacientes
SELECT Nome FROM medico
UNION
SELECT Nome FROM paciente;

-- ============================= consultas com JOIN e visualização de tabelas  ==========================================
-- 26. Nome do paciente e data da consulta
SELECT p.Nome, c.data
FROM consulta c
JOIN paciente p ON c.id_paciente = p.ID_Paciente;

-- 27. Nome do médico e especialidade com consulta
SELECT m.Nome, m.Especialidade, c.data
FROM consulta c
JOIN medico m ON c.id_medico = m.ID_Medico;

-- 28. Receita com nome do paciente e do médico
SELECT r.descricao, p.Nome AS paciente, m.Nome AS medico
FROM receita r
JOIN consulta c ON r.id_consulta = c.id_consulta
JOIN paciente p ON c.id_paciente = p.ID_Paciente
JOIN medico m ON c.id_medico = m.ID_Medico;


-- ============================= consultas com tipos de JOIN: INNER, LEFT, RIGHT==========================================
-- 29. INNER JOIN – apenas consultas com médicos
SELECT * FROM consulta
INNER JOIN medico ON consulta.id_medico = medico.ID_Medico;

-- 30. LEFT JOIN – todas as consultas, com ou sem receita
SELECT * FROM consulta
LEFT JOIN receita ON consulta.id_consulta = receita.id_consulta;

-- 31. RIGHT JOIN – todas as receitas, mesmo que não tenham consulta (hipotético)
SELECT * FROM consulta
RIGHT JOIN receita ON consulta.id_consulta = receita.id_consulta;

-- 32. LEFT JOIN – pacientes com ou sem consultas
SELECT p.Nome, c.data
FROM paciente p
LEFT JOIN consulta c ON p.ID_Paciente = c.id_paciente;

