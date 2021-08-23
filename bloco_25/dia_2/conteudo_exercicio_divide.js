use("storage")
db.products.find();

// 1. Calcule qual será o preço de venda de cada produto caso haja uma promoção de 50% de desconto.
db.products.aggregate([
  { $project: {
    _id: 0,
    name: 1,
    newPrice: {
      $divide: ["$sale_price", 2],
    },
  } },
]);

/* db.products.aggregate([
  { $project: {
    _id: 0,
    name: 1,
    newPrice: {
      $subtract: [
        "$sale_price",
        { $multiply: [
          "$sale_price",
          { $divide: [50, 100], }
        ] }
      ]
    },
  } },
]);*/
