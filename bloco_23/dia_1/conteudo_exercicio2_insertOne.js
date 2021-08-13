use("sample");
db.products.insertOne({
  _id: 2,
  productName: "Caixa",
  price: 20
});
db.products.find();
