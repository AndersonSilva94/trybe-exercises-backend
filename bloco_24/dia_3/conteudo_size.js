use("class")
/* db.products.insertMany([
  { _id: 1, tags: ["red", "green"] },
  { _id: 2, tags: ["apple", "lime"] },
  { _id: 3, tags: "fruit" },
  { _id: 4, tags: ["orange", "lemon", "grapefruit"] }
]);*/

db.products.find();
db.products.find(
  { tags: { $size: 2 } }
);