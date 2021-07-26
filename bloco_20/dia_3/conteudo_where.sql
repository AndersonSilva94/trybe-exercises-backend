USE sakila;

-- WHERE =
SELECT * FROM actor
WHERE last_name = 'DAVIS';

SELECT * FROM actor
WHERE actor_id = 101;

-- where > e <
SELECT * FROM film
WHERE length > 50
ORDER BY length;

-- where <>
SELECT * FROM film
WHERE title <> 'ALIEN CENTER'
ORDER BY length;

-- where AND
SELECT * FROM film
WHERE title <> 'ALIEN CENTER'
AND replacement_cost > 20;

-- where OR
SELECT * FROM film
WHERE rating = 'G'
OR rating = 'PG'
OR rating = 'PG-13';

-- where IS
SELECT * FROM rental
WHERE return_date IS NULL;

SELECT * FROM staff
WHERE active IS TRUE;

SELECT * FROM address
WHERE address2 IS NOT NULL;

-- where LIKE
SELECT * FROM film
WHERE title NOT LIKE 'academy%';

-- prevalência de operadores
SELECT * FROM payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;

SELECT * FROM payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;