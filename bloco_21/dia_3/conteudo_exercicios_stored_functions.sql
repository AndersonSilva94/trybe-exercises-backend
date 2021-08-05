-- 1. Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
USE sakila;
DELIMITER $$
CREATE FUNCTION RetornaQuantidadeTotalDePagamentos(id INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE quantidade_total INT;
SELECT COUNT(*)
FROM sakila.payment
WHERE sakila.payment.customer_id = id INTO quantidade_total;
RETURN quantidade_total;
END $$

DELIMITER ;

SELECT RetornaQuantidadeTotalDePagamentos(1);

-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
USE sakila;
DELIMITER $$
CREATE FUNCTION ExibeNomeDoFilmePorInventario(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
DECLARE nome_do_filme VARCHAR(200);
SELECT
f.title
FROM sakila.film f
INNER JOIN sakila.inventory i
ON f.film_id = i.film_id
WHERE id = i.inventory_id INTO nome_do_filme;
RETURN nome_do_filme;
END $$

DELIMITER ;

SELECT ExibeNomeDoFilmePorInventario(9);

-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila;
DELIMITER $$
CREATE FUNCTION ExibeQuantidadeDeFilmesPorCategoria(categoria VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
DECLARE quantidade_de_filmes INT;
SELECT COUNT(*)
FROM sakila.film_category fc
INNER JOIN sakila.category c
ON fc.category_id = c.category_id
WHERE categoria = c.name INTO quantidade_de_filmes;
RETURN quantidade_de_filmes;

END $$

DELIMITER ;

SELECT ExibeQuantidadeDeFilmesPorCategoria('Comedy');