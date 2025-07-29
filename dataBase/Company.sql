-- Criação do banco de dados e seleção do mesmo
CREATE DATABASE Company;
USE Company;
-- Tabela: Departments
CREATE TABLE Departments (
 id_department INT PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(100) NOT NULL,
 location VARCHAR(100)
);
-- Tabela: Employees
CREATE TABLE Employees (
 id_employee INT PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(100) NOT NULL,
 email VARCHAR(100),
 department_id INT,
 FOREIGN KEY (department_id) REFERENCES Departments(id_department)
);
-- Tabela: Projects
CREATE TABLE Projects (
 id_project INT PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(100) NOT NULL,
 start_date DATE,
 end_date DATE
);
-- Tabela: Assignments
CREATE TABLE Assignments (
 id_assignment INT PRIMARY KEY AUTO_INCREMENT,
 employee_id INT,
 project_id INT,
 role VARCHAR(50),
 FOREIGN KEY (employee_id) REFERENCES Employees(id_employee),
 FOREIGN KEY (project_id) REFERENCES Projects(id_project)
);
-- Inserção em Departments
INSERT INTO Departments (name, location) VALUES 
('Recursos Humanos', 'São Paulo'),
('TI', 'Rio de Janeiro'),
('Financeiro', 'Belo Horizonte'),
('Marketing', 'Curitiba');
-- Inserção em Employees
INSERT INTO Employees (name, email, department_id) VALUES
('Ana Silva', 'ana.silva@example.com', 1),
('Bruno Costa', 'bruno.costa@example.com', 2),
('Carla Souza', 'carla.souza@example.com', 3),
('Diego Lima', 'diego.lima@example.com', 4);
-- Inserção em Projects
INSERT INTO Projects (name, start_date, end_date) VALUES
('Projeto Alpha', '2024-01-01', '2024-06-30'),
('Projeto Beta', '2024-02-15', '2024-08-15'),
('Projeto Gamma', '2024-03-01', '2024-09-30'),
('Projeto Delta', '2024-04-10', '2024-12-31');
-- Inserção em Assignments
INSERT INTO Assignments (employee_id, project_id, role) VALUES
(1, 1, 'Líder'),
(2, 2, 'Desenvolvedor'),
(3, 3, 'Analista'),
(4, 4, 'Coordenador');


-- ==========================1==============================
SELECT * FROM Employees;

-- ==========================2==============================
SELECT * FROM Employees
WHERE name = 'Bruno Costa';

-- ==========================3==============================
UPDATE Employees
SET email = 'ana.novo@example.com'
WHERE name = 'Ana Silva';

-- ==========================4==============================
ALTER TABLE Employees
ADD salary DECIMAL(10,2);

-- ==========================5==============================
UPDATE Employees SET salary = 5500.00 WHERE id_employee = 1;
UPDATE Employees SET salary = 6200.00 WHERE id_employee = 2;
UPDATE Employees SET salary = 4800.00 WHERE id_employee = 3;

-- ==========================6==============================
SELECT * FROM Employees
WHERE salary IS NOT NULL;

-- ==========================7==============================
DELETE FROM Employees
WHERE name = 'Diego Lima';

-- ==========================8==============================
SELECT * FROM Employees
ORDER BY name ASC;

-- ==========================9==============================
UPDATE Employees
SET salary = salary * 1.10
WHERE salary IS NOT NULL;

-- ==========================10==============================
SELECT COUNT(*) AS total_funcionarios
FROM Employees;

-- ==========================11==============================
SELECT * FROM Employees
WHERE name LIKE '%Silva%';

-- ==========================12==============================
SELECT * FROM Employees
WHERE salary > 5000.00;

