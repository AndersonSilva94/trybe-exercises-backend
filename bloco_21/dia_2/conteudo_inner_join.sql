-- Exemplo 1:
SELECT city.city, city.country_id, country.country
FROM sakila.city AS city
INNER JOIN sakila.country AS country
ON city.country_id = country.country_id;

-- Exemplo 2:
SELECT f.title, f.language_id, l.name
FROM sakila.film AS f
INNER JOIN sakila.language AS l
ON f.language_id = l.language_id;

-- Exemplo 3:
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;

-- também é possível omitir o AS, sendo assim o alias é escrito logo após o nome da tabela
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor a
INNER JOIN film_actor f
ON a.actor_id = f.actor_id;