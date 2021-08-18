use("conteudo_trybe")
/* db.customers.insertOne(
  { _id: 1, status: "a", lastModified: ISODate("2013-10-02T01:11:18.965Z") }
);
*/
db.customers.find();

/* db.customers.updateOne(
  { _id: 1 },
  { $currentDate: {
      lastModified: true,
      "cancellation.date": { $type: "timestamp" }
    }, $set: {
      "cancellation.reason": "user request",
      status: "D"
    }
  }
); */
db.customers.find();
