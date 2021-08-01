-- EXISTS serve para retornar os registros da tabela A que possuem um relacionamento com os registros da tabela B.
-- usando o db hotel
SELECT * FROM hotel.Customers AS c
WHERE EXISTS (
  SELECT * FROM hotel.Reservations
  WHERE c.CustomerId = Reservations.CustomerId
);

SELECT * FROM hotel.Customers AS c
WHERE NOT EXISTS (
  SELECT * FROM hotel.Reservations
  WHERE c.CustomerId = Reservations.CustomerId
);

-- usando o dv praticando
SELECT `Name` FROM praticando.manufacturers AS m
WHERE NOT EXISTS (
  SELECT * FROM praticando.products
  WHERE Manufacturer = m.Code
);
SELECT `Name` FROM praticando.manufacturers AS m
WHERE EXISTS (
  SELECT * FROM praticando.products
  WHERE Manufacturer = m.Code
);