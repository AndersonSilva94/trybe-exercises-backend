use("conteudo_trybe")
/* db.increment.insertOne(
  {
    _id: 1,
    sku: "abc123",
    quantity: 10,
    metrics: {
      orders: 2,
      ratings: 3.5
    }
  }
);
*/

db.increment.find();

/* db.increment.update(
  { sku: "abc123" },
  { $inc: { quantity: -2, "metrics.orders": 1 } }
);
*/

db.increment.find();