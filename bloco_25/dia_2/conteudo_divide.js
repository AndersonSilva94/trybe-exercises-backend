use("agg-trybe-two")
/* db.planning.insertMany([
  { _id: 1, name: "A", hours: 80, resources: 7 },
  { _id: 2, name: "B", hours: 40, resources: 4 }
])*/

db.planning.aggregate([
  {
    $project: {
      name: 1,
      workdays: {
        $divide: ["$hours", 8]
      }
    }
  }
]);
