use("agg-trybe-two")
/* db.sales.insertMany([
  { _id: 1, item: "abc", price: 10, fee: 2, date: ISODate("2014-03-01T08:00:00Z") },
  { _id: 2, item: "jkl", price: 20, fee: 1, date: ISODate("2014-03-01T09:00:00Z") },
  { _id: 3, item: "xyz", price: 5,  fee: 0, date: ISODate("2014-03-15T09:00:00Z") }
]);*/

// usando soma
db.sales.aggregate([
  { $project: { 
    item: 1, 
    total: { $add: ["$price", "$fee"] } 
  } }
]);

// trabalhando com datas
db.sales.aggregate([
  { $project: { 
    item: 1, 
    billing_date: { 
      $add: ["$date", 3 * 24 * 60 * 60000] 
    } 
  } }
]);