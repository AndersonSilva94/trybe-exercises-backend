use("sales")
db.survey.find();

// Removendo todos os itens iguais a um valor especificado
/* db.supplies.updateMany(
  {},
  {
    $pull: {
      items: {
        name: { $in: ["pens", "envelopes"] },
      },
    },
  },
);*/

// Removendo todos os itens que atendem a uma condição diretamente no $pull
/* db.profiles.insertOne({ _id: 1, votes: [3, 5, 6, 7, 7, 8] }); */
/* db.profiles.updateOne(
  { _id: 1 },
  {
    $pull: {
      votes: { $gte: 6 },
    },
  },
);*/

// Removendo itens em um array de Documentos
/* db.survey.insertMany([
  {
  _id: 1,
  results: [
    { item: "A", score: 5 },
    { item: "B", score: 8, comment: "Strongly agree" },
  ],
},
{
  _id: 2,
  results: [
    { item: "C", score: 8, comment: "Strongly agree" },
    { item: "B", score: 4 },
  ],
}
])
 */
/* db.survey.updateMany(
  {},
  {
    $pull: {
      results: { score: 8 , item: "B" },
    },
  },
);
 */
