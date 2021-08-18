use("conteudo_trybe")
/* db.products.insertOne({
  _id: 100,
  sku: "abc123",
  quantity: 250,
  instock: true,
  reorder: false,
  details: { model: "14Q2", make: "xyz" },
  tags: [ "apparel", "clothing" ],
  ratings: [ { by: "ijk", rating: 4 } ]
}); */

db.products.find();

// alterando campos no primeiro nível
/* db.products.update(
  { _id: 100 },
  { $set: {
      quantity: 500,
      details: { model: "14Q3", make: "xyz" },
      tags: [ "coats", "outerwear", "clothing" ]
    }
  }
);
 */

db.products.find();

// alterando campos em documentos embedados
/* db.products.update(
  { _id: 100 },
  { $set: { "details.make": "zzz" } }
); */

db.products.find();

// alterando valores em arrays
/* db.products.update(
  { _id: 100 },
  { $set: {
      "tags.1": "rain gear",
      "ratings.0.rating": 2
    }
  }
);
 */

db.products.find();