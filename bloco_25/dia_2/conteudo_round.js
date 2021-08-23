use("agg-trybe-two")
db.samples.aggregate([
  { $project: {
    value: 1,
    roundedValue: { $round: ["$value"] } 
  } }
]);