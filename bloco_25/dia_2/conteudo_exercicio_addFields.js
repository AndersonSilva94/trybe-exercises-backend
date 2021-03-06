use("storage")
db.products.find()

// 1. Calcule o valor total do estoque, considerando que cada produto valha o mesmo que seu preço de venda. Lembre-se da quantidade.
db.products.aggregate([
  { $addFields: {
    valorTotal: {
      $multiply: ["$sale_price", "$quantity"]
    },
  } },
]);
