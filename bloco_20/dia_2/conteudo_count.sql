USE sakila;
-- Quantas senhas temos cadastradas nessa tabela?
SELECT COUNT(password) FROM staff;

-- Quantas pessoas temos no total trabalhando para nossa empresa?
SELECT COUNT(first_name) FROM staff;

-- Quantos emails temos cadastrados nessa tabela?
SELECT COUNT(email) FROM staff;