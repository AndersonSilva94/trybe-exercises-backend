const express = require('express');
const { getPlants, getPlantById,
  removePlantById, createNewPlant, editPlant } = require('./plants');

const route = express.Router();

route.post('/', (request, response) => {
  const { plant } = request.body;
  const newPlant = createNewPlant(plant);
  return response.status(201).send(newPlant);
});

route.get('/', (_request, response) => {
  const plants = getPlants();
  return response.status(200).send(plants);
});

route.get('/:id', (request, response) => {
  const { id } = request.params;
  const idPlant = Number(id);
  const plant = getPlantById(idPlant);
  return response.status(200).send(plant);
});

route.put('/:id', (request, response) => {
  const { id } = request.params;
  const idPlant = Number(id);
  const { plant } = request.body;
  const newValuePlant = editPlant(idPlant, plant);
  return response.status(200).send(newValuePlant);
});

route.delete('/:id', (request, response) => {
  const { id } = request.params;
  const idPlant = Number(id);
  const plants = removePlantById(idPlant);
  return response.status(200).send(plants);
});

module.exports = route;