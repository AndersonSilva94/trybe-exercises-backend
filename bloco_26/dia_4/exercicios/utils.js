const fs = require('fs/promises');
const allSimpsons = 'simpsons.json';

function getSimpsons () {
  return JSON.parse(fs.readFile(allSimpsons, 'utf-8'))
}

function setSimpsons (newSimpsons) {
  return fs.writeFile(allSimpsons, JSON.stringify(newSimpsons));
}

module.exports = { getSimpsons, setSimpsons };