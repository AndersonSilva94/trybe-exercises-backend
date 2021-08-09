-- 1. Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de dados sakila . Essa view deve exibir o título do filme, o id da categoria e o nome da categoria. Os resultados devem ser ordenados pelo título do filme.
CREATE VIEW film_with_categories AS
SELECT 
f.title AS `título do filme`,
fc.category_id AS `id da categoria`,
c.name AS `nome da categoria`
FROM sakila.film f
INNER JOIN sakila.film_category fc
ON f.film_id = fc.film_id
INNER JOIN sakila.category c
ON fc.category_id = c.category_id
ORDER BY `título do filme`;

SELECT * FROM film_with_categories;

-- 2. Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila . Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes.
CREATE VIEW film_info AS
SELECT
a.actor_id AS `id do ator/atriz`,
CONCAT(a.first_name, ' ', a.last_name) AS `actor`,
f.title AS `filme`
FROM sakila.actor a
INNER JOIN sakila.film_actor fa
ON a.actor_id = fa.actor_id
INNER JOIN sakila.film f
ON fa.film_id = f.film_id
ORDER BY `actor`;

SELECT * FROM film_info;

-- 3. Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila . Sua view deve exibir o address_id , o address , o district , o city_id e a city . Os resultados devem ser ordenados pelo nome das cidades.
CREATE VIEW address_info AS
SELECT
a.address_id AS `id do endereço`,
a.address AS `endereço`,
a.district AS `distrito`,
c.city_id AS `id da cidade`,
c.city AS `cidade`
FROM sakila.address a
INNER JOIN sakila.city c
ON a.city_id = c.city_id
ORDER BY `cidade`;

SELECT * FROM address_info;

-- 4. Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila . Sua view deve exibir o título do filme , o id do idioma e o idioma do filme.
CREATE VIEW movies_languages AS
SELECT
f.title AS `título do filme`,
l.language_id AS `id do idioma`,
l.name AS `idioma`
FROM sakila.film f
INNER JOIN sakila.language l
ON l.language_id = f.language_id;

SELECT * FROM movies_languages;