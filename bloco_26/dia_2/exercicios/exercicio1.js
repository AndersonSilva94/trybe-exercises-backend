function calculaParams(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject(Error("Informe apenas números"));
    const calculo = (a + b) * c;

    if (calculo < 50) reject(Error("Valor muito baixo"));
    resolve(calculo);
  });

  return promise;
};

calculaParams(1, 2, 85)
  .then(result => console.log(`valor: ${result}`))
  .catch(err => console.log(`erro: ${err}`));

calculaParams(2, 3, "andy")
  .then(result => console.log(`valor: ${result}`))
  .catch(err => console.log(`erro: ${err}`));

  calculaParams(2, 3, 4)
  .then(result => console.log(`valor: ${result}`))
  .catch(err => console.log(`erro: ${err}`));