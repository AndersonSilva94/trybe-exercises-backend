const { questionInt, questionFloat } = require('readline-sync');

const altura = questionInt("Qual a sua altura em centímetros? ");
const peso = questionFloat("Qual seu peso? ");

const imc = Math.round(peso / Math.pow(( altura/ 100 ), 2));

/* console.log(`Seu IMC é ${imc}`); */
const response = (value) => {
  let textResponse;

  if (value < 18.5) textResponse = "Abaixo do peso (magreza)"
  else if(value >= 18.5 && value <= 24.9) textResponse = "Peso normal"
  else if(value >= 25 && value <= 29.9) textResponse = "Acima do peso (sobrepeso)"
  else if(value >= 30 && value <= 34.9) textResponse = "Obesidade grau I"
  else if(value >= 35 && value <= 39.9) textResponse = "Obesidade grau II"
  else textResponse = "Obesidade graus III e IV"

  return textResponse;
}

console.log(`Seu IMC é ${imc}, logo você está com ${response(imc)}`);