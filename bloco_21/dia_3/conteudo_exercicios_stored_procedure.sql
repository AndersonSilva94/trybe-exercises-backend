-- 1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
USE sakila;
DELIMITER $$

CREATE PROCEDURE ExibeAtoresMaisPopulares()
BEGIN
SELECT
a.actor_id AS `IdAtor`,
COUNT(*) AS `Quantidade de filmes`
FROM sakila.actor a
INNER JOIN sakila.film_actor f
ON a.actor_id = f.actor_id
GROUP BY `IdAtor`
ORDER BY `Quantidade de filmes` DESC
LIMIT 10;
END $$
DELIMITER ;

CALL ExibeAtoresMaisPopulares();

-- 2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
USE sakila;
DELIMITER $$

CREATE PROCEDURE ExibeDadosDoFilme(IN categoryWord VARCHAR(100))
BEGIN
	SELECT 
	f.film_id AS `IdFilme`,
	f.title AS `Nome do filme`,
	fc.category_id AS `IdCategoria`,
	c.name AS `Categoria`
	FROM sakila.film f
	INNER JOIN sakila.film_category fc
	ON f.film_id = fc.film_id
	INNER JOIN sakila.category c
	ON fc.category_id = c.category_id
	WHERE c.name = categoryWord;
END $$

DELIMITER ;

SET @category = 'comedy';
CALL ExibeDadosDoFilme(@category);

-- 3. Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
USE sakila;
DELIMITER $$

CREATE PROCEDURE VerificaClienteAtivaOuNao(IN emailUser VARCHAR(200), OUT isActive BOOL)
BEGIN
	SELECT active FROM sakila.customer
	WHERE email = emailUser
	INTO isActive;
END $$

DELIMITER ;

SELECT @isActiveUser;
CALL VerificaClienteAtivaOuNao('SANDRA.MARTIN@sakilacustomer.org', @isActiveUser);
SELECT @isActiveUser;