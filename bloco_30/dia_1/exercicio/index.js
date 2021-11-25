const express = require('express');
const { getPlantsThatNeedsSunWithId } = require('./plants');
const routePlants = require('./routes');

const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/plants', routePlants);

app.get('/sunny/:id', (request, response) => {
  const { id } = request.params;
  const idPlant = Number(id);
  const plant = getPlantsThatNeedsSunWithId(idPlant);
  response.send(plant);
});

app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});