use("agg-trybe")

// 1. Selecione todos os bancos, ou seja, valores do campo bank ;
db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
      bank: { $sum: 1 },
    }
  }
]);

// 2. Selecione o valor total das transações em cada banco e quantas são;
db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
      totalValue: {
        $sum: "$value"
      },
      totalTransactions: { $sum: 1 },
    }
  }
]);

// 3. Selecione o valor total de transações por banco;
db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
      totalValue: {
        $sum: "$value"
      },
    },
  },
]);

// 4. Selecione os bancos que têm o valor total de transações maior que 1000.
db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
      totalValue: {
        $sum: "$value",
      },
    },
  },
  {
    $match: { totalValue: { $gt: 1000 } }
  }
]);
