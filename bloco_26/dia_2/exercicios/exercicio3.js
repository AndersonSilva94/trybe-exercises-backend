const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 100 + 1);
const c = Math.floor(Math.random() * 100 + 1);

async function calculaParams(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject(Error("Informe apenas números"));
    const calculo = (a + b) * c;

    if (calculo < 50) reject(Error("Valor muito baixo"));
    resolve(calculo);
  });

  return promise;
};

async function promiseCalc() {
  try {
    const resultado = await calculaParams(a, b, c);
    console.log(`valor: ${resultado}`)
  } catch(err) {
    console.log(err)
  }
};

promiseCalc();
