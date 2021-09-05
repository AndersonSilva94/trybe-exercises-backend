const express = require('express');;
const router = express.Router();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const validatePrice = (request, response, next) => {
  const { price } = request.body;

  if (!price || typeof(price) !== 'number' || price < 0) 
    return response.status(400).json({ message: 'Invalid price!' });
  
  next();
}

router.get('/', (_request, response) => {
  return response.status(200).json(recipes)
});

router.post('/', validatePrice, (request, response) => {
  const { id, name, price } = request.body;
  const { username } = request.user; // Aqui estamos acessando o usuário encontrado no middleware de autenticação.

  const findRecipe = recipes.find((elem) => elem.id === id)

  if(findRecipe) return response.status(400).json({ message: 'Id already exists!' });

  recipes.push({ id, name, price, chef: username });
  return response.status(200).json({ message: 'Recipe created successfully!'})
})

router.put('/:id', validatePrice, (request, response) => {
  const { id } = request.params;
  const { name, price } = request.body;

  const findRecipe = recipes.findIndex((elem) => elem.id === parseInt(id));

  if (findRecipe === -1) return response.status(400).json({ message: 'Recipe not found!' });

  recipes[findRecipe] = { ...recipes[findRecipe], name, price };

  return response.status(200).json({ message: 'Updated recipe!' });
})

module.exports = router;