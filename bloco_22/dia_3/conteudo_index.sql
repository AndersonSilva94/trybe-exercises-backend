-- Criando um índice em uma coluna
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna);

-- Criando um índice composto, em duas ou mais colunas
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna1, coluna2);

-- Excluindo índices
DROP INDEX nome_do_indice ON tabela;

-- Entenda o impacto do INDEX
CREATE INDEX index_first_name ON sakila.actor(first_name);

DROP INDEX index_first_name ON sakila.actor;

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';

-- Entenda o impacto do FULLTEXT INDEX
CREATE FULLTEXT INDEX index_address ON sakila.address(address);

DROP INDEX index_address ON sakila.address;

SELECT *
FROM sakila.address
WHERE MATCH(address) AGAINST('drive');

SELECT *
FROM sakila.address
WHERE address LIKE '%drive%';

-- Entenda o impacto do UNIQUE INDEX
CREATE UNIQUE INDEX unique_name_index ON sakila.language(name);

SELECT *
FROM sakila.language
WHERE name = 'Mandarin';

DROP INDEX unique_name_index ON sakila.language;

SELECT * FROM sakila.language
WHERE name = 'Mandarin';