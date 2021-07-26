USE sakila;

-- tabela film
-- Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
SELECT * FROM film;

-- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação .
SELECT title, release_year, rating FROM film;

-- Quantos filmes temos cadastrados?
SELECT COUNT(*) FROM film;

-- tabela actor
-- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
SELECT DISTINCT last_name FROM actor;

-- Quantos sobrenomes únicos temos na tabela?
SELECT COUNT(DISTINCT last_name) FROM actor;

-- Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
SELECT * FROM actor
ORDER BY first_name DESC, last_name ASC;

-- tabela language
SELECT * FROM language LIMIT 5 OFFSET 1;

-- tabela film (de novo)
-- Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes ,
-- incluindo o título , o ano de lançamento , a duração , a classificação indicativa e o custo de substituição.
-- Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
SELECT title, release_year, length, rating, replacement_cost FROM film 
ORDER BY length DESC, replacement_cost ASC LIMIT 20;