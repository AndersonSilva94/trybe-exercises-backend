CREATE TABLE `Filme` (
  `FilmeId` int NOT NULL AUTO_INCREMENT,
  `Descricao` varchar(100) NOT NULL,
  `AnoLancamento` int NOT NULL,
  `Nota` int DEFAULT NULL,
  PRIMARY KEY (`FilmeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci