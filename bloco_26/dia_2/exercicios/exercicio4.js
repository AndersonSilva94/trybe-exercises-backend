const fs = require('fs').promises;

const simpsons = 'simpsons.json'

// exercício 4.1
/* fs.readFile(simpsons, 'utf-8')
  .then((response) => JSON.parse(response))
  .then((element) => (
    element.map((elem) => {
      console.log(`${elem.id} - ${elem.name}`);
    })
  )); */

// exercício 4.2
/* async function recebeId(idSimpsons) {
  try {
    const read = await fs.readFile(simpsons, 'utf-8')
    const response = await JSON.parse(read);
    const elemento = await response.find(elem => parseInt(elem.id) === idSimpsons)
    console.log(`${elemento.id} - ${elemento.name}`)
  } catch (err) {
    console.log("Erro: id não encontrado")
  }
};

recebeId(3);
recebeId(24); */
/* fs.readFile(simpsons, 'utf-8')
  .then((response) => JSON.parse(response))
  .then((element) => (
    element.filter((elem) => parseInt(elem.id) === idSimpsons)
  ))
  .then((simp) => console.log(`${simp.id} - ${simp.name}`))
  .catch((err) => console.log(err)); */

// exercício 4.3
