create database crud_db;
use crud_db;

create table usuarios(
    id int auto_increment primary key,
    nome varchar(100),
    email varchar(100)
);

INSERT INTO usuarios (nome, email) VALUES
('João Silva', 'joaosilva@email.com'),
('Maria Oliveira', 'maria.oliveira@mail.com'),
('Carlos Souza', 'carlos.souza@protonmail.com'),
('Ana Santos', 'ana.santos@outlook.com'),
('Pedro Costa', 'pedrocosta@business.com'),
('Juliana Pereira', 'juliana.pereira@email.com'),
('Fernando Alves', 'fernando.alves@mail.com'),
('Patrícia Lima', 'patricia.lima@protonmail.com'),
('Ricardo Gomes', 'ricardo.gomes@outlook.com'),
('Amanda Rocha', 'amanda.rocha@business.com'),
('Lucas Martins', 'lucas.martins@email.com'),
('Beatriz Cardoso', 'beatriz.cardoso@mail.com'),
('Marcos Ribeiro', 'marcos.ribeiro@protonmail.com'),
('Tatiane Ferreira', 'tatiane.ferreira@outlook.com'),
('Gustavo Barbosa', 'gustavo.barbosa@business.com'),
('Vanessa Cunha', 'vanessa.cunha@email.com'),
('Roberto Dias', 'roberto.dias@mail.com'),
('Daniela Moreira', 'daniela.moreira@protonmail.com'),
('Eduardo Correia', 'eduardo.correia@outlook.com'),
('Camila Nunes', 'camila.nunes@business.com'),
('Fábio Teixeira', 'fabio.teixeira@email.com'),
('Larissa Lopes', 'larissa.lopes@mail.com'),
('Rodrigo Monteiro', 'rodrigo.monteiro@protonmail.com'),
('Mariana Carvalho', 'mariana.carvalho@outlook.com'),
('Alexandre Araújo', 'alexandre.araujo@business.com'),
('Cristina Melo', 'cristina.melo@email.com'),
('Sérgio Ramos', 'sergio.ramos@mail.com'),
('Isabela Freitas', 'isabela.freitas@protonmail.com'),
('André Peixoto', 'andre.peixoto@outlook.com'),
('Renata Miranda', 'renata.miranda@business.com'),
('Diego Fonseca', 'diego.fonseca@email.com'),
('Laura Guimarães', 'laura.guimaraes@mail.com'),
('Paulo Andrade', 'paulo.andrade@protonmail.com'),
('Viviane Machado', 'viviane.machado@outlook.com'),
('Leonardo Tavares', 'leonardo.tavares@business.com'),
('Helena Campos', 'helena.campos@email.com'),
('Maurício Brito', 'mauricio.brito@mail.com'),
('Adriana Rezende', 'adriana.rezende@protonmail.com'),
('Felipe Vasconcelos', 'felipe.vasconcelos@outlook.com'),
('Simone Dantas', 'simone.dantas@business.com'),
('Rafael Queiroz', 'rafael.queiroz@email.com'),
('Priscila Bezerra', 'priscila.bezerra@mail.com'),
('Hugo Medeiros', 'hugo.medeiros@protonmail.com'),
('Elaine Moura', 'elaine.moura@outlook.com'),
('Bruno Caldas', 'bruno.caldas@business.com'),
('Carla Fontes', 'carla.fontes@email.com'),
('Otávio Xavier', 'otavio.xavier@mail.com'),
('Luciana Prado', 'luciana.prado@protonmail.com'),
('Vinícius Leal', 'vinicius.leal@outlook.com'),
('Sandra Bessa', 'sandra.bessa@business.com');

SELECT * FROM usuarios;

DELETE FROM usuarios 
WHERE id NOT IN (1, 2, 3, 4, 5);  -- Mantém apenas os IDs 1 a 5