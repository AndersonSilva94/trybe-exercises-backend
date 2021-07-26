SELECT COUNT(*) FROM sakila.rental;
SELECT * FROM sakila.rental;

-- Query + LIMIT quantidade_de_resultados (LIMIT)
SELECT * FROM sakila.rental LIMIT 10;

-- Query + LIMIT quantidade_de_linhas OFFSET quantidade_de_linhas (LIMIT OFFSET)
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;