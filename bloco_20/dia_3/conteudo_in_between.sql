USE sakila;

SELECT * FROM actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');

SELECT * FROM customer
WHERE customer_id IN (1, 2, 3, 4, 5);

-- Como você faria, então, para encontrar, usando o IN , todos os detalhes sobre o aluguel dos clientes com os seguintes ids: 269, 239, 126, 399, 142?
SELECT location FROM address
WHERE address_id IN (269, 239, 126, 399, 142);

-- Como encontraria todas as informações sobre os endereços que estão registrados nos distritos de QLD, Nagasaki, California, Attika, Mandalay, Nantou e Texas?
SELECT * FROM address
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

-- BETWEEN
SELECT title, length FROM film
WHERE length BETWEEN 50 AND 120;

-- BETWEEN com strings
SELECT * FROM language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;

-- BETWEEN com datas
SELECT rental_id, rental_date FROM rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';