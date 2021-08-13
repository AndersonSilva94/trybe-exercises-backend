use class;

// Exercício 7 : Retorne a quantidade de documentos da coleção books .
db.books.find().count();

// Exercício 8 : Conte quantos livros existem com o status = "PUBLISH" .
db.books.find({ "status": "PUBLISH" }).count();

// Exercício 9 : Exiba os atributos title , isbn e pageCount dos 3 primeiros livros. NÃO retorne o atributo _id .
db.books.find({}, {
  _id:0,
  title: 1,
  isbn: 1,
  pageCount: 1
}).limit(3);

// Exercício 10: Pule 5 documentos e exiba os atributos _id , title , authors e status dos livros com o status = "MEAP" , limitando-se a 10 documentos.
db.books.find({ status: "MEAP" }, {
  title: 1,
  authors: 1,
  status: 1
}).limit(10).skip(5);
