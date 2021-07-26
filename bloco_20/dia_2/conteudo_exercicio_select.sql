-- monte uma query que exiba seu nome na tela
SELECT 'Anderson';

-- monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela
SELECT 'Anderson', 'Silva', 'Manaus', 'AM', 27;

-- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS;
SELECT 'Anderson' AS nome, 'Silva' AS sobrenome, 'Manaus' AS capital, 'AM' AS estado, 27 AS idade;

-- Qual é o resultado de 13 * 8?
SELECT 13 * 8;

-- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual";
SELECT now() AS 'Data Atual';

-- usando o banco de dados sakila monte as seguintes queries:
-- Escreva uma query que selecione todas as colunas da tabela city ;
USE sakila;
SELECT * FROM city;

-- Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer ;
SELECT first_name, last_name FROM customer;

-- Escreva uma query que exiba todas as colunas da tabela rental ;
SELECT * FROM rental;

-- Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film ;
SELECT title, description, release_year FROM film;

-- Utilize o SELECT para explorar todas as tabelas do banco de dados;
SELECT * FROM actor;
SELECT * FROM address;
SELECT * FROM category;
SELECT * FROM city;
SELECT * FROM country;
SELECT * FROM customer;
SELECT * FROM film;
SELECT * FROM film_actor;
SELECT * FROM film_category;
SELECT * FROM film_text;
SELECT * FROM inventory;
SELECT * FROM language;
SELECT * FROM payment;
SELECT * FROM rental;
SELECT * FROM staff;
SELECT * FROM store;