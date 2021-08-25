const readline = require('readline-sync');

const scripts = [
  { nome: 'Calcular IMC', arquivo: './imc.js' },
  { nome: 'Calcular velocidade média', arquivo: './velocidade.js' },
  { nome: 'Jogo de adivinhação', arquivo: './sorteio.js' },
];

// Iteramos sobre os scripts para criar a lista numerada
let mensagem = scripts.map((script, index) => `${index + 1} - ${script.nome}`);

// Adicionamos uma linha a mais no começo da mensagem
mensagem.unshift('Escolha um número para executar o script correspondente');

// Juntamos todos os elementos em uma string, separando-os por uma quebra de linha
mensagem = mensagem.join('\n');

const scriptNumber = readline.questionInt(mensagem) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

require(script.arquivo);