use("class")
/* db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: [
      "action",
      "adventure"
    ],
    imdbRating: 7.7,
    budget: 35
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi"
    ],
    imdbRating: 6.6,
    budget: 10
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy"
    ],
    imdbRating: 7.4
  }
]);*/
db.movies.find();

// 1. Utilizando o operador $all , retorne todos os filmes que contenham action e adventure no array category .
db.movies.find({
  category: { $all: ["action", "adventure"] }
});

// 2. Agora retorne os filmes que contenham action no array category e possuem nota do IMDB maior do que 7 .
db.movies.find({
  $and: [ 
    { category: { $all: ["action"] } }, 
    { imdbRating: { $gt: 7 } }
  ]
});

// 3. Adicione um array chamado ratings ao filme Batman com os seguintes valores: [85, 100, 102, 105] . Dica: lembre-se do operador $each visto no dia anterior.
db.movies.updateOne(
  { title: "Batman" },
  { $push: {
    ratings: {
      $each: [85, 100, 102, 105]
    }
  } }
);

// 4. Adicione um array chamado ratings ao filme Godzilla com os seguintes valores: [78, 52, 95, 102] .
db.movies.updateOne(
  { title: "Godzilla" },
  { $push: {
    ratings: {
      $each: [78, 52, 95, 102]
    }
  } }
);

// 5. Adicione um array chamado ratings ao filme Home Alone com os seguintes valores: [200, 99, 65] .
db.movies.updateOne(
  { title: "Home Alone" },
  { $push: {
    ratings: {
      $each: [200, 99, 65]
    }
  } }
);

// 6. Retorne todos os filmes com ratings maior do que 103 , exibindo apenas os campos title e ratings .
db.movies.find(
  { ratings: { $gt: 103 } },
  { _id: 0, title: 1, ratings: 1 }
);

// 7. Retorne todos os filmes com ratings entre 100 e 105 , exibindo apenas os campos title e ratings .
db.movies.find(
  { ratings: { 
    $elemMatch: { $gte: 100, $lte: 105 }
  } },
  { _id: 0, title: 1, ratings: 1 }
);

// 8. Retorne todos os filmes com ratings entre 64 e 105 e divis??veis por 9 , exibindo apenas os campos title e ratings .
db.movies.find(
  { ratings: {
    $elemMatch: { $gte: 64, $lte: 105 },
    $mod: [9, 0]
  } },
  { _id: 0, title: 1, ratings: 1 }
);

// 9. Retorne os filmes da categoria adventure e com ratings maior do que 103 , exibindo apenas os campos title , ratings e category .
db.movies.find(
  { $and: [
    { category: { $all: ["adventure"] } },
    { ratings: { $gt: 103 } }
  ] },
  { _id: 0, title: 1, ratings: 1, category: 1 }
);

// 10. Retorne somente o t??tulo de todos os filmes com dois elementos no array category .
db.movies.find(
  { category: { $size: 2 } },
  { _id: 0, title: 1 }
);

// 11. Retorne somente o t??tulo de todos os filmes com quatro elementos no array ratings .
db.movies.find(
  { ratings: { $size: 4 } },
  { _id: 0, title: 1 }
);

// 12. Busque os filmes em que o m??dulo 5 do campo budget seja 0 e que o array category tenha tamanho 2 .
db.movies.find({
  budget: { $mod: [5, 0] },
  category: { $size: 2 }
});
