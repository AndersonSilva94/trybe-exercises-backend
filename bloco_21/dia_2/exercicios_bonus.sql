-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.
SELECT *
FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice b
ON m.id = b.movie_id
INNER JOIN Pixar.Theater t
ON t.id = m.theater_id
WHERE b.rating > 8;


-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.
SELECT m1.title, m1.length_minutes, m2.title, m2.length_minutes
FROM Pixar.Movies m1, Pixar.Movies m2
WHERE m1.director = m2.director
AND m1.title <> m2.title;

-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
-- INNER JOIN
SELECT m.title FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice b
ON m.id = b.movie_id
WHERE m.length_minutes > 110
AND b.international_sales > 500000000;

-- SUBQUERIE
SELECT title FROM Pixar.Movies
WHERE id IN (
  SELECT movie_id FROM Pixar.BoxOffice
  WHERE international_sales > 500000000
)
AND length_minutes > 110;