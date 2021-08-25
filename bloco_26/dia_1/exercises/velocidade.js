const { questionInt } = require('readline-sync');

const distancia = questionInt("Digite a distância em metros: ");
const tempo = questionInt("Digite o tempo em segundos: ");

const velocidadeMedia = (distancia/ tempo).toFixed(2);

console.log(`A velocidade média é ${velocidadeMedia} m/s`);