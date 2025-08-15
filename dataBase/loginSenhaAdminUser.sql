CREATE DATABASE loginnet;
USE loginnet;

CREATE TABLE users(
	id INT PRIMARY KEY AUTO_INCREMENT,
    login VARCHAR(100),
    senha VARCHAR(100),
    role ENUM('adm', 'user') NOT NULL DEFAULT 'user'
);

INSERT INTO users(login, senha, role) VALUES
('admin', 'admin123', 'adm'),
('wellington', 'user123', 'user');

SELECT * FROM users;