const { question, questionInt } = require('readline-sync');

const sorteio = () => {
  const numeroEscolhido = questionInt("Digite um número (0-10): ")
  let textResponse;
  const numeroSorteado = Math.floor(Math.random() * 10);

  switch(numeroEscolhido) {
    case numeroSorteado:
      textResponse = 'Parabéns, número correto!';
      break;
    default:
      textResponse = `Opa, não foi dessa vez. O número era ${numeroSorteado}`
  }

  console.log(textResponse);

  const reiniciaJogo = question("Gostaria de jogar novamente? (s/n) ");
  if(reiniciaJogo === 'n') {
    console.log("Ok, até a próxima!")
    return;
  }
  sorteio();
}

sorteio();