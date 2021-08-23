use("agg-trybe-two")
/* db.scores.insertMany([
  {
  _id: 1,
  student: "Maya",
  homework: [10, 5, 10],
  quiz: [10, 8],
  extraCredit: 0
  },
  {
    _id: 2,
    student: "Ryan",
    homework: [5, 6, 5],
    quiz: [8, 8],
    extraCredit: 8
  }
]); */

db.scores.aggregate([
  {
    $addFields: {
      totalHomework: { $sum: "$homework" } ,
      totalQuiz: { $sum: "$quiz" }
    }
  },
  {
    $addFields: {
      totalScore: {
        $add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ]
      }
    }
  }
]);
