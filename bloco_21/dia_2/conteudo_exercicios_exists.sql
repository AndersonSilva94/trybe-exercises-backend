-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT Id, Title FROM hotel.Books AS b
WHERE NOT EXISTS (
  SELECT * FROM hotel.Books_Lent
  WHERE b.Id = book_id
);

-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT Id, Title FROM hotel.Books AS b
WHERE EXISTS (
  SELECT * FROM hotel.Books_Lent
  WHERE b.Id = book_id
  AND b.Title LIKE '%lost%'
);

-- Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT `Name` FROM hotel.Customers AS c
WHERE NOT EXISTS (
  SELECT * FROM hotel.CarSales
  WHERE c.CustomerId = CustomerId
);

-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT cus.Name, car.Name FROM hotel.Customers AS cus
INNER JOIN hotel.Cars AS car
WHERE EXISTS (
  SELECT * FROM hotel.CarSales
  WHERE CustomerId = cus.CustomerId
  AND CarID = car.Id
);