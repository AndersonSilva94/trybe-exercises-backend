-- ADIÇÃO, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO

SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

-- usando colunas de dbs:
SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;

-- DIVIDINDO INTEIROS COM DIV E ENCONTRANDO O RESTO COM MOD
-- DIV retorna o resultado inteiro de uma divisão, sem casas decimais
SELECT 10 DIV 3;
SELECT 10 DIV 2;
SELECT 14 DIV 3;
SELECT 13 DIV 2;

-- MOD retorna o resto da divisão (Lembrar de modular da matemática!)
SELECT 10 MOD 3;
SELECT 10 MOD 2;
SELECT 14 MOD 3;
SELECT 13 MOD 2;
SELECT 10.5 MOD 2;

-- Arredondando valores
-- ROUND: arredonda conforme sua parte decimal.
-- Se for de 0.5 pra cima, arredonda para mais, caso contrário, para menos

-- Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.4925);
SELECT ROUND(10.5136);
SELECT ROUND(-10.5136);
SELECT ROUND(10.4925, 2); -- 10.49
SELECT ROUND(10.4925, 3); -- 10.493

-- CEIL: arredonda sempre para cima
SELECT CEIL(10.51);
SELECT CEIL(10.49);
SELECT CEIL(10.2);

-- FLOOR: arredonda sempre para baixo
SELECT FLOOR(10.51);
SELECT FLOOR(10.49);
SELECT FLOOR(10.2);

-- EXPONENCIAÇÃO E RAIZ QUADRADA
-- POW: exponenciação
SELECT POW(2, 2);
SELECT POW(2, 4);

-- SQRT: raiz quadrada
SELECT SQRT(9);
SELECT SQRT(16);

-- Gerando valores aleatórios
-- RAND: gera um valor aleatório entre 0 e 1;
SELECT RAND();

-- Para gerar um valor entre 7 e 13:
SELECT ROUND(7 + (RAND() * 6));