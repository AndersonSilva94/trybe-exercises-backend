use("agg-trybe-two")
/* db.ratings.insertMany([
  { _id: 1, start: 5, end: 8 },
  { _id: 2, start: 4, end: 4 },
  { _id: 3, start: 9, end: 7 },
  { _id: 4, start: 6, end: 7 }
]);*/

db.ratings.aggregate([
  {
    $project: {
      delta: {
        $abs: { $subtract: ["$start", "$end"] }
      }
    }
  }
]);