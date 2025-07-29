-- ---------------------exercicios 01-------------------------------
-- SELECT * FROM Cliente
-- ORDER BY nome ASC;

-- ---------------------exercicios 02-------------------------
-- SELECT * FROM Produto
-- WHERE preco > 1000
-- ORDER BY preco DESC;

-- ---------------------exercicios 03-------------------------------
-- select * from Pedido
-- where data_pedido between '2023-05-11' and '2023-05-14';

-- ---------------------exercicios 04
-- SELECT * FROM Cliente
-- WHERE email LIKE '%cliente.com%';

-- ---------------------exercicios 05-----------------------------
-- SELECT * FROM Produto
-- WHERE estoque < 50;

-- ---------------------exercicios 06--------------------------------
-- SELECT * FROM Fornecedor
-- WHERE telefone IS NULL;

-- ---------------------exercicios 07---------------------------
-- SELECT nome, preco, preco + 100 AS Reajuste
-- FROM Produto;

-- ---------------------exercicios 08---------------------------------
-- SELECT * FROM Cliente
-- WHERE nome LIKE 'A%' OR telefone = '2345-6789';

-- ---------------------exercicios 09-----------------------
-- SELECT * FROM Produto
-- WHERE preco BETWEEN 100 AND 1500;


-- ---------------------exercicios 10------------------------
-- SELECT * FROM Cliente
-- WHERE email LIKE '%cliente%'
-- ORDER BY email DESC;

-- ---------------------exercicios 11------------------------
-- SELECT * FROM Cliente
-- WHERE data_nascimento < '1990-01-01'
--   AND nome LIKE '%a%'
-- ORDER BY data_nascimento DESC;

-- ---------------------exercicios 12------------------------
-- SELECT * FROM Fornecedor
-- WHERE (cidade = 'São Paulo' OR cidade = 'Rio de Janeiro')
--   AND email LIKE '%fornec%'
-- ORDER BY nome ASC;
-- ---------------------exercicios 13------------------------
-- SELECT nome, preco, estoque, (preco * estoque) AS total_estoque
-- FROM Produto
--  WHERE (preco * estoque) > 5000
--  ORDER BY total_estoque DESC;

-- ---------------------exercicios 14------------------------
-- SELECT * FROM Pedido
-- WHERE data_pedido BETWEEN '2023-05-01' AND '2023-05-31'
--   AND quantidade BETWEEN 1 AND 3
-- ORDER BY quantidade DESC;

-- ---------------------exercicios 15------------------------
-- Atualizar o telefone do Fornecedor F para NULL
-- UPDATE Fornecedor
-- SET telefone = NULL
-- WHERE nome = 'Fornecedor F';

-- Selecionar fornecedores com telefone NULL
-- SELECT * FROM Fornecedor
-- WHERE telefone IS NULL;
