create database sistemas;
use sistemas;

create table pessoas(
    id int primary key auto_increment,
    nome varchar(100),
    sexo varchar(10)
);

select * from pessoas;

insert into pessoas(nome, sexo)
VALUE
('Fatima', 'F'),
('Robeto', 'M');


