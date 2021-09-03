const express = require('express');
const bodyParser = require('body-parser');

const app = express(); //1
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: "lasanha", price: 40.0, waitTime: 30 },
  { id: 2, name: "macarrão a bolonhesa", price: 35.0, waitTime: 25 },
  { id: 3, name: "macarrão com molho branco", price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
];

app
.route('/recipes')
.get(function (request, response) {
  const sortRecipes = recipes.sort(function (a, b ) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
  response.json(sortRecipes)
})
.post(function (request, response) {
  const { id, name, price, waitTime } = request.body;
  recipes.push({ id, name, price, waitTime });
  response.status(201).json({ message: 'Recipe created successfully!' });
})

app.get('/drinks', function(request, response) {
  const sortDrinks = drinks.sort(function (a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  })
  response.json(sortDrinks)
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001')
});

/* app.get('/hello', helloWordRequest); //2

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}) //3

function helloWordRequest(req, res) {
  res.status(200).send('Hello World'); //4
} */

/* function helloWordRequest(req, res) {
  res.status(200).send('Olá Mundo!');
}; */

/* Rota com caminho '/', utilizando o método GET */
/* app.get('/', function (req, res) {
  res.send('hello world GET');
});
 */
/* Rota com caminho '/', utilizando o método POST */
/* app.post('/', function (req, res) {
  res.send('hello world POST');
}); */

/* Rota com caminho '/', utilizando o método PUT */
/* app.put('/', function (req, res) {
  res.send('hello world PUT');
}); */

/* Rota com caminho '/', utilizando o método DELETE */
/* app.delete('/', function (req, res) {
  res.send('hello world DELETE');
}); */

/* Rota com caminho '/' para qualquer método HTTP */
/* app.all('/', function (req, res) {
  res.send('hello world ALL');
}); */

// Encadeamento de requisições para evitar repetir o caminho
/* app
  .route('/')
  .get(function (request, response) {
    // Requisições para rota GET `/` são resolvidas aqui!
    response.send('hello word GET');
  })
  .post(function (request, response) {
    // Requisições para rota POST `/` são resolvidas aqui!
    response.send('hello word POST');
  }); */

  // query string -> geralmente usado em funcionalidades de pesquisa, onde o usuário seleciona uma informação e através de filtros avançados, uma rota é criada.
  app.get('/recipes/search', function(request, response) {
    const { name, maxPrice, minPrice } = request.query;
    const filteredRecipes = recipes.filter((elem) => elem.name.includes(name.toLowerCase()) 
      && elem.price < parseInt(maxPrice) && elem.price > parseInt(minPrice));
    response.status(200).json(filteredRecipes);
  });

  /* app.get('/recipes/:id', function (request, response) {
  const { id } = request.params;
  const recipe = recipes.find((elem) => elem.id === parseInt(id));

  if (!recipe) return response.status(400).json({ message: 'Recipe not found!' });
  response.json(recipe);
}); */

  app.get('/drinks/search', function(request, response) {
    const { name } = request.query;
    const filteredDrinks = drinks.filter((elem) => elem.name.includes(name));
    response.status(200).json(filteredDrinks);
  });

app.get('/drinks/:id', function(request, response) {
  const { id } = request.params;

  const drink = drinks.find((elem) => elem.id === parseInt(id));

  if (!drink) return response.status(400).json({ message: 'Drink not found' });

  return response.status(200).json(drink)
});
