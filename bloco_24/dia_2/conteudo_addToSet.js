use("sales")
/* db.inventory.insertOne(
  {
  _id: 1,
  item: "polarizing_filter",
  tags: ["electronics", "camera"],
}
);*/
db.inventory.find();

// adicionando ao array
/* db.inventory.updateOne(
  { _id: 1 },
  { $addToSet: { tags: "accessories" } },
);*/

// se o valor existir
/* db.inventory.updateOne(
  { _id: 1 },
  { $addToSet: { tags: "camera"  } },
);*/

//com o modificador $each
/* db.inventory.insertOne({ _id: 2, item: "cable", tags: ["electronics", "supplies"] });*/

/* db.inventory.updateOne(
  { _id: 2 },
  {
    $addToSet: {
      tags: {
        $each: ["camera", "electronics", "accessories"],
      },
    },
  },
);*/
