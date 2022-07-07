const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 100 + 1);
const c = Math.floor(Math.random() * 100 + 1);

function calculaParams(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject(Error("Informe apenas números"));
    const calculo = (a + b) * c;

    if (calculo < 50) reject(Error("Valor muito baixo"));
    resolve(calculo);
  });

  return promise;
};

calculaParams(a, b, c)
  .then(result => console.log(`valor: ${result}`))
  .catch(err => console.log(`erro: ${err}`));
