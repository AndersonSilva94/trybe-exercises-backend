CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;
CREATE TABLE estado(
  estado_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

INSERT INTO estado(nome) VALUES('Minas Gerais');
INSERT INTO estado(nome) VALUES('Santa Catarina');

CREATE TABLE ddd(
  ddd_id INT PRIMARY KEY AUTO_INCREMENT,
  numero INT NOT NULL,
  estado_id INT NOT NULL,
  FOREIGN KEY (estado_id) REFERENCES estado(estado_id)
) ENGINE=InnoDB;

INSERT INTO ddd(numero, estado_id) VALUES(35, 1);
INSERT INTO ddd(numero, estado_id) VALUES(47, 2);
INSERT INTO ddd(numero, estado_id) VALUES(33, 1);

CREATE TABLE setor(
  setor_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

INSERT INTO setor(nome) VALUES('Administração');
INSERT INTO setor(nome) VALUES('Vendas');
INSERT INTO setor(nome) VALUES('Operacional');
INSERT INTO setor(nome) VALUES('Estratégico');
INSERT INTO setor(nome) VALUES('Marketing');

CREATE TABLE funcionario(
  funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(20) NOT NULL,
  sobrenome VARCHAR(20) NOT NULL,
  email VARCHAR(100) NOT NULL,
  ddd_id INT NOT NULL,
  telefone VARCHAR(11) NOT NULL,
  data_cadastro VARCHAR(100) NOT NULL,
  FOREIGN KEY (ddd_id) REFERENCES ddd(ddd_id)
) ENGINE=InnoDB;

INSERT INTO funcionario(nome, sobrenome, email, ddd_id, telefone, data_cadastro)
VALUES('Joseph', 'Rodrigues', 'jo@gmail.com', 1, '998552-1445', '2020-05-05 08:50:25');
INSERT INTO funcionario(nome, sobrenome, email, ddd_id, telefone, data_cadastro)
VALUES('André', 'Freeman', 'andre1990@gmail.com', 2, '99522-4996', '2020-02-05');
INSERT INTO funcionario(nome, sobrenome, email, ddd_id, telefone, data_cadastro)
VALUES('Cíntia', 'Duval', 'cindy@outlook.com', 3, '99855-4669', '2020-05-05 10:55:35');
INSERT INTO funcionario(nome, sobrenome, email, ddd_id, telefone, data_cadastro)
VALUES('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', 3, '99200-1556', '2020-05-05 11:45:40');

CREATE TABLE funcionario_por_setor(
  id INT PRIMARY KEY AUTO_INCREMENT,
  funcionario_id INT NOT NULL,
  setor_id INT NOT NULL,
  FOREIGN KEY (funcionario_id) REFERENCES funcionario(funcionario_id),
  FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
) ENGINE=InnoDB;

INSERT INTO funcionario_por_setor(funcionario_id, setor_id) VALUES(1, 1);
INSERT INTO funcionario_por_setor(funcionario_id, setor_id) VALUES(1, 2);
INSERT INTO funcionario_por_setor(funcionario_id, setor_id) VALUES(2, 3);
INSERT INTO funcionario_por_setor(funcionario_id, setor_id) VALUES(3, 4);
INSERT INTO funcionario_por_setor(funcionario_id, setor_id) VALUES(3, 2);
INSERT INTO funcionario_por_setor(funcionario_id, setor_id) VALUES(4, 5);