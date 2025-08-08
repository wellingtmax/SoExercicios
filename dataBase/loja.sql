create database loja;
use loja;

create table produtos(
id int primary key auto_increment,
nome varchar(100),
preco varchar(10.2),
estoque INT
);

INSERT INTO produtos (nome, preco, estoque) VALUES 
('Camiseta Tech', 49.90, 100),
('Teclado Mecânico', 299.99, 50),
('Mouse Gamer', 129.90, 80),
('Notebook i7', 4500.00, 20),
('Fone Bluetooth', 199.50, 60);

SELECT * FROM produtos;

ALTER TABLE produtos ADD imagem VARCHAR(255);

DESCRIBE produtos;

UPDATE produtos SET imagem = 'uploads/camisetatech.jpg' WHERE id = 1;
UPDATE produtos SET imagem = 'uploads/tecladomecanico.jpg' WHERE id = 2;
UPDATE produtos SET imagem = 'uploads/mousegamer.jpg' WHERE id = 3;
UPDATE produtos SET imagem = 'uploads/notebooki7.jpg' WHERE id = 4;
UPDATE produtos SET imagem = 'uploads/fonebluetooth.jpg' WHERE id = 5;

