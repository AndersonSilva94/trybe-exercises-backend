use("conteudo_trybe")
/* db.scores.insertOne(
  { _id: 1, highScore: 800, lowScore: 200 }
);
*/
db.scores.find();

// COMPARANDO NÚMEROS

/* db.scores.update(
  { _id: 1 },
  { $min: { lowScore: 150 } }
);
*/
db.scores.find();

/* db.scores.update(
  { _id: 1 },
  { $max: { highScore: 950 } }
); */
db.scores.find();

//  COMPARANDO DATAS
/* db.tags.insertOne(
  {
    _id: 1,
    desc: "crafts",
    dateEntered: ISODate("2019-10-01T05:00:00Z"),
    dateExpired: ISODate("2019-10-01T16:38:16Z")
  }
);
*/

/* db.tags.update(
  { _id: 1 },
  {
    $min: { dateEntered: new Date("2019-09-25") },
    $max: { dateExpired: new Date("2019-10-02") }
  }
);
*/

db.tags.find();