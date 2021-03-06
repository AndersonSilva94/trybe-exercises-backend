use("storage")
db.products.find()

// Calcule qual o lucro total de cada produto, considerando o preço de compra, os impostos e seu valor de venda.
db.products.aggregate([
  { $project: {
    _id: 0,
    name: 1,
    lucroTotal: {
      $subtract: [
        "$sale_price",
        { $add: ["$purchase_price", "$taxes"] }
      ],
    },
  } },
]);