-- CURRENT_DATE: pega o ano, mes e dia atuais
-- NOW: pega o ano, mês, dia, hora, minutos e segundos atuais
SELECT CURRENT_DATE();
SELECT NOW();


-- DATEDIFF: calcula a diferença entre duas datas
-- TIMEDIFF: calcula a diferença entre duas horas
-- o segundo valor é subtraído do primeiro
SELECT DATEDIFF('2020-01-31', '2020-01-01');
SELECT DATEDIFF('2020-01-01', '2020-01-31');
SELECT TIMEDIFF('08:30:10', '09:30:10');

-- Usando DATEDIFF e TIMEDIFF com DATE, YEAR, MONTH, DAY, HOUR, MINUTE, SECOND
SELECT YEAR(CURRENT_DATE());
SELECT HOUR(NOW());