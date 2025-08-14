CREATE DATABASE livros;
USE livros;

select * from livros;

INSERT INTO livros (titulo, autor, ano_publicacao, genero, resumo, imagem, preco)
VALUES
(
    'O Senhor dos Anéis',
    'J.R.R. Tolkien',
    1954,
    'Fantasia',
    'Uma aventura épica pela Terra Média para destruir o Um Anel.',
    'https://m.media-amazon.com/images/I/81OuqXhn6cL.jpg',
    79.90
),
(
    '1984',
    'George Orwell',
    1949,
    'Ficção Distópica',
    'Um mundo distópico onde o Grande Irmão controla todos os aspectos da vida.',
    'https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg',
    39.90
);

