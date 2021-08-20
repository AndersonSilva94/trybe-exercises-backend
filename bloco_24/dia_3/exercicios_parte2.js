// 13. Retorne os filmes da categoria "sci-fi" ou que possua o ratings maior do que 199 , exibindo apenas os campos title , ratings e category .
use("class")
db.movies.find(
  { $or: [
    { category: { $all: ["sci-fi"] } },
    { ratings: { $gt: 199 } }
  ] },
  { _id: 0, title: 1, ratings: 1, category: 1 }
);

// 14. Retorne os filmes em que o ratings possua tamanho 4 e que seja da category "adventure" ou "family" , mas que não tenha o imdbRating menor que 7.
db.movies.find({
  ratings: { $size: 4 },
  category: { $in: ["adventure", "family"] },
  imdbRating: { $not: { $lt: 7 } }
});

// 15. Adicione o campo description no filme Batman com o seguinte valor: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker." .
db.movies.updateOne(
  { title: "Batman" },
  { $set: {
    description: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
  } }
);

// 16. Adicione o campo description no filme Godzilla com o seguinte valor: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity." .
db.movies.updateOne(
  { title: "Godzilla" },
  { $set: {
    description: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity."
  } }
);

// 17. Adicione o campo description no filme Home Alone com o seguinte valor: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation." .
db.movies.updateOne(
  { title: "Home Alone" },
  { $set: {
    description: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
  } }
);

// 18. Utilizando o operador $regex , retorne todos os filmes em que a descrição comece com a palavra "The" .
db.movies.find({
  description: { $regex: /^The/i }
});

// 19. Utilizando o operador $regex , retorne todos os filmes em que a descrição termine com a palavra "humanity." .
db.movies.find({
  description: { $regex: /humanity.$/i }
});

// 20. Crie um índice do tipo text no campo description .
db.movies.createIndex({ description: "text" });

// 21. Utilizando o operador $text , busque por filmes que contenham o termo "vacation" .
db.movies.find({
  $text: { $search: "vacation" }
});

// 22. Utilizando o operador $text , busque por filmes que contenham os termos "monstrous" ou "criminal" .
db.movies.find({
  $text: { $search: "monstrous criminal" }
});

// 23. Utilizando o operador $text , busque por filmes que contenham a frase "when he is accidentally" .
db.movies.find({
  $text: { $search: "\"when he is accidentally\""}
});