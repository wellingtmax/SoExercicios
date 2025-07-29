-- select titulo,
-- data_inicio from projetos WHERE year(data_inicio) > 2024;

-- SELECT titulo,
-- data_inicio FROM projetos WHERE year(data_inicio) = year(curdate());

-- SELECT nome as Nome,
-- upper(cargo) as Cargo_em_Maiusculo,
-- length(nome) as Tamanho_caracteres
-- FROM funcionarios;

-- ----------------------subconsulta--------------------------------------------
-- -------liste apenas os funcionarios que estão vinculados a algum projetos---
-- SELECT * FROM funcionarios
-- WHERE id IN(SELECT id_funcionario FROM projetos)

-- select nome from funcionarios as Nome
-- union 
-- select nome from departamentos as nome_departamento;

-- SELECT 
-- p.titulo, 
-- f.nome, 
-- d.nome
-- from funcionarios f, 
-- projetos p, 
-- departamentos d
-- WHERE p.id_funcionario = f.id
-- and p.id_departamento = d.id;

-- SELECT 
-- f.NOME, 
-- f.CARGO,
-- p.TITULO,
-- p.DATA_INICIO
-- FROM funcionarios f, projetos p
-- WHERE p.id_funcionario = f.id and p.data_inicio < '2023-01-01';