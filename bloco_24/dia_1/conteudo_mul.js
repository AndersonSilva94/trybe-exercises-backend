use("conteudo_trybe")
/* db.products.insertOne(
  { "_id": 1, "item": "ABC", "price": NumberDecimal("10.99"), "qty": 25 }
);
*/

db.products.find();

// aplicando o $mul para multiplicar os campos price e qty
/* db.products.update(
  { _id: 1 },
  { $mul: { price: NumberDecimal("1.25"), qty: 2 } }
); */

db.products.find(
  { _id: 1 }
);

//multiplicando com campos inexistentes
/* db.products.insertOne(
  { _id: 2, item: "Unknown" }
);
*/
/* db.products.update(
  { _id: 2 },
  { $mul: { price: NumberLong("100") } }
); */

db.products.find(
  { _id: 2 }
);

// multiplicando valores com tipos diferentes
/* db.products.insertOne(
  { _id: 3,  item: "XYZ", price: NumberLong("10") }
);
*/
/* db.products.update(
  { _id: 3 },
  { $mul: { price: NumberInt(5) } }
); */

db.products.find(
  { _id: 3 }
);