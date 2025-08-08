create database oficina;
use oficina;

create table Cliente(
id int primary key auto_increment,
nome varchar(100),
cpf varchar(15),
sexo varchar(10)
); 

insert into cliente (nome, cpf, sexo) values
('João Silva', '111.111.111-11', 'Masculino'),
('Maria Oliveira', '222.222.222-22', 'Feminino'),
('Carlos Souza', '333.333.333-33', 'Masculino'),
('Marina Souza', '555.555.555-55', 'Feminino');

select * from cliente;