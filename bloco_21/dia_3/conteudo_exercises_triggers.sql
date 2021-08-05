-- 1. Crie um TRIGGER que, a cada nova inserção feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .
USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER trigger_insere_carro
BEFORE INSERT ON carros
FOR EACH ROW
BEGIN
SET NEW.data_atualizacao = NOW(),
NEW.acao = 'INSERT',
NEW.disponivel_em_estoque = 1;
END $$
DELIMITER ;

INSERT INTO carros(preco) VALUES(80.000);

-- 2. Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' .
USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER trigger_atualiza_carro
BEFORE UPDATE ON carros
FOR EACH ROW
BEGIN
SET NEW.data_atualizacao = NOW(),
NEW.acao = 'ATUALIZAÇÃO';
END $$
DELIMITER ;

UPDATE carros
SET preco = 800000.00
WHERE id_carro = 1;

-- 3. Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.
USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER trigger_remove_carro
AFTER DELETE ON carros
FOR EACH ROW
BEGIN
INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
VALUES ('EXCLUSÃO', NOW());
END $$
DELIMITER ;

DELETE FROM carros WHERE id_carro = 2;