use("sales")

// Adicionando um valor a um array
// upsert: true -> adiciona o elemento ao mesmo tempo que acontece o $push
/* db.supplies.updateOne(
  { _id: 1 },
  {
  $push: {
      items: {
        "name": "notepad",
        "price":  35.29,
        "quantity": 2,
      },
    },
  },
  { upsert: true },
);*/

db.supplies.find();

// Adicionando múltiplos valores a um array
/* db.supplies.updateOne(
  {},
  {
  $push: {
    items: {
        $each: [
          {
            "name": "pens",
            "price": 56.12,
            "quantity": 5,
          },
          {
            "name": "envelopes",
            "price": 19.95,
            "quantity": 8,
          },
        ],
    },
    },
  },
  { upsert: true },
);*/

// Múltiplos modificadores
/* db.dropDatabase(); */
/* db.supplies.updateOne(
  { _id: 1 },
  {
    $push: {
      items: {
        $each: [
          {
            "name" : "notepad",
            "price" : 35.29,
            "quantity" : 2,
          },
          {
            "name": "envelopes",
            "price": 19.95,
            "quantity": 8,
          },
          {
            "name": "pens",
            "price": 56.12,
            "quantity": 5,
          },
        ],
        $sort: { quantity: -1 },
        $slice: 2,
      },
    },
  },
  { upsert: true },
); */
