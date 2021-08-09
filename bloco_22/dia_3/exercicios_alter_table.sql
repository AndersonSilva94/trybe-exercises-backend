-- 1. Escreva uma query SQL para alterar na tabela localtions o nome da coluna street_address para address , mantendo o mesmo tipo e tamanho de dados.
SHOW COLUMNS FROM hr.locations;
ALTER TABLE hr.locations CHANGE STREET_ADDRESS ADDRESS VARCHAR(40);

-- 2. Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e tamanho de dados.
SHOW COLUMNS FROM hr.regions;
ALTER TABLE hr.regions CHANGE REGION_NAME REGION VARCHAR(25);

-- 3. Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o mesmo tipo e tamanho de dados.
SHOW COLUMNS FROM hr.countries;
ALTER TABLE hr.countries CHANGE COUNTRY_NAME COUNTRY VARCHAR(40);