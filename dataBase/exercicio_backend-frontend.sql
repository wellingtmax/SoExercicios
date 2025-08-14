CREATE DATABASE jogofutboll;
USE jogofutboll;

CREATE TABLE game(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
tipo VARCHAR(100) NOT NULL,
ano INT NOT NULL,
imagem VARCHAR(255)
);

INSERT INTO game (nome, tipo, ano, imagem) VALUES
('Cyberpunk 2077', 'RPG', 2020, 'cyberpunk.jpg'),
('Elden Ring', 'RPG', 2022, 'elden.jpg'),
('FIFA 23', 'Esporte', 2022, 'fifa23.jpg'),
('God of War Ragnarök', 'Ação', 2022, 'God_of_War_Ragnarök_capa.jpg'),
('Grand Theft Auto V', 'Ação/Aventura', 2013, 'gta.jpg'),
('Hollow Knight', 'Metroidvania', 2017, 'hollow.jpg'),
('Minecraft', 'Sandbox', 2011, 'minecraft.jpg'),
('Mortal Kombat 11', 'Luta', 2019, 'mk11.jpg'),
('Call of Duty: Modern Warfare II', 'Tiro', 2022, 'MODERN-WARFARE-2-000-ARTREVEAL-TOUT.jpg'),
('Resident Evil 3 Remake', 'Terror', 2023, 're3.jpg'),
('Red Dead Redemption 2', 'Ação/Aventura', 2018, 'Red_Dead_Redemption_2.png'),
('Street Fighter 6', 'Luta', 2023, 'sf6.jpg'),
('Super Mario Odyssey', 'Plataforma', 2017, 'Super_Mario_Odyssey_Capa.png'),
('The Witcher 3: Wild Hunt', 'RPG', 2015, 'TW3_Wild_Hunt.png'),
('The Legend of Zelda: Breath of the Wild', 'Aventura', 2017, 'zelda.jpg');

DELETE FROM game
WHERE imagem IS NULL OR imagem = '';

SET SQL_SAFE_UPDATES = 0;
SET SQL_SAFE_UPDATES = 1;

DELETE FROM game;

TRUNCATE TABLE game;

SELECT * FROM game;

ALTER TABLE game ADD COLUMN imagem VARCHAR(255);
