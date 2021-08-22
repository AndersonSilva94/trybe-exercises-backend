use("agg-trybe")
db.articles.aggregate(
  [
    { $limit : 5 }
  ]
);