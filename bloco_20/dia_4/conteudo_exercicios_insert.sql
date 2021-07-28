/* Insira um novo funcionário na tabela sakila.staff .
Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada! */
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES('Anderson', 'Silva', 2, 'Anderson.Silva@testsakila.com', 2, 1, 'Andy', '');

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password) VALUES
('Caiozinho', 'Silva', 1, 'Caiozinho.Silva@testsakila.com', 2, 1, 'Caio', ''),
('Mariazinha', 'Johansson', 5, 'Mariazinha.Johansson@testsakila.com', 1, 1, 'Maria', '928392jshdjasdbjs');

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer
LIMIT 5;

-- Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO sakila.category (name)
VALUES ('Anime'), ('Musical'), ('Indie');

-- Cadastre uma nova loja na tabela sakila.store .
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);