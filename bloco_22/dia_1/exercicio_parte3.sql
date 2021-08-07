CREATE DATABASE IF NOT EXISTS zoologico;
USE zoologico;
CREATE TABLE especie(
  especie_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE setor(
  setor_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE gerente(
  gerente_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  idade INT NOT NULL,
  sexo CHAR(1) NOT NULL,
  data_contratacao DATETIME NOT NULL,
  email VARCHAR(100)
) ENGINE=InnoDB;

CREATE TABLE cuidador(
  cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  idade INT NOT NULL,
  sexo CHAR(1) NOT NULL,
  data_contratacao DATETIME NOT NULL,
  email VARCHAR(100),
  setor_id INT NOT NULL,
  gerente_id INT NOT NULL,
  FOREIGN KEY (setor_id) REFERENCES setor(setor_id),
  FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
) ENGINE=InnoDB;

CREATE TABLE animal(
  animal_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  especie_id INT NOT NULL,
  sexo CHAR(1) NOT NULL,
  idade INT NOT NULL,
  setor_id INT NOT NULL,
  cuidador_id INT NOT NULL,
  FOREIGN KEY (especie_id) REFERENCES especie(especie_id),
  FOREIGN KEY (setor_id) REFERENCES setor(setor_id),
  FOREIGN KEY (cuidador_id) REFERENCES cuidador(cuidador_id)
) ENGINE=InnoDB;