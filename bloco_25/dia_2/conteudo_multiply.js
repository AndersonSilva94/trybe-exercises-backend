use("agg-trybe-two")
db.sales.find();

db.sales.aggregate([
  {
    $project: {
      date: 1,
      item: 1,
      total: {
        $multiply: ["$price", "$fee"]
      }
    }
  }
]);
