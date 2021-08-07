/*
Sintaxe
CREATE TABLE nome_tabela(
  coluna1 tipo constraint,
  coluna2 tipo constraint,
  coluna3 tipo constraint,
) ENGINE='nome_engine' -> Mecanismo que o db vai se comportar, armazenamento padrão do MySQL, responsável por podermos utilizar as chaves estrangeiras
*/
CREATE DATABASE IF NOT EXISTS albuns;
USE albuns;
CREATE TABLE estilo_musical(
  genero_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE artista(
  artista_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  idade INT,
  genero_id INT NOT NULL,
  sexo CHAR(1),
  data_comecou_cantar DATE NOT NULL,
  grupo TINYINT(1) NOT NULL,
  FOREIGN KEY (genero_id) REFERENCES estilo_musical(genero_id)
) ENGINE=InnoDB;

CREATE TABLE albuns_musicais(
  album_id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(100) NOT NULL,
  preco DOUBLE NOT NULL,
  data_lancamento DATE NOT NULL,
  artista_id INT NOT NULL,
  FOREIGN KEY (artista_id) REFERENCES artista(artista_id)
) ENGINE=InnoDB;

CREATE TABLE musicas(
  musica_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  album_id INT NOT NULL,
  artista_id INT NOT NULL,
  FOREIGN KEY (album_id) REFERENCES albuns_musicais(album_id),
  FOREIGN KEY (artista_id) REFERENCES artista(artista_id)
) ENGINE=InnoDB;