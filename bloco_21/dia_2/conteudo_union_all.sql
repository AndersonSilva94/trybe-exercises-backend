(SELECT first_name, last_name, '-' AS 'customer_id' FROM sakila.actor LIMIT 20)
UNION ALL
(SELECT first_name, last_name, customer_id FROM sakila.customer LIMIT 20)
ORDER BY first_name
LIMIT 10 OFFSET 20;