use("erp")

/* Exercício 1 : Utilize uma combinação das expressões aritméticas e adicione um campo chamado idade à coleção clientes . Algumas dicas:
  -> arredonde para baixo o valor da idade;
  -> calcule a idade usando a diferença entre a data corrente e a data de nascimento;
  -> 1 dia é igual a 86400000 milissegundos.
 */
db.clientes.aggregate([
  { $addFields: {
    idade: {
      $floor: { 
        $divide: [
          { $subtract: ["$$NOW", "$dataNascimento"] },
          { $multiply: [86400000, 365] }
        ],
      },
    },
  } },
]);

// Exercício 2 : Utilizando o novo campo idade , conte quantos clientes têm entre 18 e 25 anos.
db.clientes.aggregate([
  { $addFields: {
    idade: {
      $floor: { 
        $divide: [
          { $subtract: ["$$NOW", "$dataNascimento"] },
          { $multiply: [86400000, 365] }
        ],
      },
    },
  } },
  { $match: {
    idade: { $gte: 18, $lte: 25 }
  } },
  { $count: "clientes" }
]);

// Exercício 3 : Remova os estágios $count e $match do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo compras .
db.clientes.aggregate([
  { $addFields: {
    idade: {
      $floor: { 
        $divide: [
          { $subtract: ["$$NOW", "$dataNascimento"] },
          { $multiply: [86400000, 365] }
        ],
      },
    },
  } },
  { $lookup: {
    from: "vendas",
    let: { cliente: "$clienteId" },
    pipeline: [
      {
        $match: {
          $expr: {
            $eq: ["$clienteId", "$$cliente"],
          },
        },
      },
    ],
    as: "compras",
  } },
]);

// Exercício 4 : Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020 .
db.clientes.aggregate([
  { $addFields: {
    idade: {
      $floor: { 
        $divide: [
          { $subtract: ["$$NOW", "$dataNascimento"] },
          { $multiply: [86400000, 365] }
        ],
      },
    },
  } },
  { $lookup: {
    from: "vendas",
    let: { cliente: "$clienteId" },
    pipeline: [
      {
        $match: {
          $expr: {
            $eq: ["$clienteId", "$$cliente"],
          },
        },
      },
    ],
    as: "compras",
  } },
  { $match: {
    "compras.dataVenda": {
      $gte: ISODate("2019-06-01"),
      $lte: ISODate("2020-03-01")
    }
  } }
]);

// Exercício 5 : Confira o número de documentos retornados pelo pipeline com o método itcount() . Até aqui, você deve ter 486 documentos sendo retornados.
db.clientes.aggregate([
  { $addFields: {
    idade: {
      $floor: { 
        $divide: [
          { $subtract: ["$$NOW", "$dataNascimento"] },
          { $multiply: [86400000, 365] }
        ],
      },
    },
  } },
  { $lookup: {
    from: "vendas",
    let: { cliente: "$clienteId" },
    pipeline: [
      {
        $match: {
          $expr: {
            $eq: ["$clienteId", "$$cliente"],
          },
        },
      },
    ],
    as: "compras",
  } },
  { $match: {
    "compras.dataVenda": {
      $gte: ISODate("2019-06-01"),
      $lte: ISODate("2020-03-01")
    }
  } }
]).itcount();

// Exercício 6 : Ainda nesse pipeline , descubra os 5 estados com mais compras.
db.clientes.aggregate([
  { $addFields: {
    idade: {
      $floor: { 
        $divide: [
          { $subtract: ["$$NOW", "$dataNascimento"] },
          { $multiply: [86400000, 365] }
        ],
      },
    },
  } },
  { $lookup: {
    from: "vendas",
    let: { cliente: "$clienteId" },
    pipeline: [
      {
        $match: {
          $expr: {
            $eq: ["$clienteId", "$$cliente"],
          },
        },
      },
    ],
    as: "compras",
  } },
  { $match: {
    "compras.dataVenda": {
      $gte: ISODate("2019-06-01"),
      $lte: ISODate("2020-03-01")
    }
  } },
  { $group: {
    _id: "$endereco.uf",
    totalComprasPorEstado: {
      $sum: { $size: "$compras" }
    }
  } },
  { $sort: { totalComprasPorEstado: -1 } },
  { $limit: 5 },
]);

// Exercício 7 : Descubra o cliente que mais consumiu QUEIJO PRATO . Retorne um documento com a seguinte estrutura:
db.vendas.aggregate([
  { $match: {
    status: { $in: ["EM SEPARACAO", "ENTREGUE"] },
    "itens.nome": "QUEIJO PRATO"
  } },
  { $unwind: "$itens" },
  { $match: { "itens.nome": "QUEIJO PRATO" } },
  { $group: {
    _id: "$clienteId",
    totalConsumo: { $sum: "$itens.quantidade" }
  } },
  { $sort: { totalConsumo: -1 } },
  { $limit: 1 },
  { $lookup: {
    from: "clientes",
    let: { idCliente: "$_id" },
    pipeline: [
      { $match: {
        $expr: {
          $eq: ["$clienteId", "$$idCliente"]
        }
      } }
    ],
    as: "dadosDoCliente"
  } },
  { $unwind: "$dadosDoCliente" },
  { $project: {
    _id: 0,
    nomeCliente: "$dadosDoCliente.nome",
    uf: "$dadosDoCliente.endereco.uf",
    totalConsumido: "$totalConsumo"
  } }
]);

// Exercício 8 : Selecione todas as vendas do mês de Março de 2020 , com status EM SEPARACAO . Acrescente um campo chamado dataEntregaPrevista com valor igual a três dias após a data da venda. Retorne apenas os campos clienteId , dataVenda e dataEntregaPrevista .
db.vendas.aggregate([
  { $match: {
    dataVenda: {
      $gte: ISODate("2020-03-01"),
      $lte: ISODate("2020-03-31")
    },
    status: "EM SEPARACAO",
  } },
  { $addFields: {
    dataEntregaPrevista: {
      $add: ["$dataVenda", 3 * 24 * 60 * 60000]
    }
  } },
  { $project: {
    _id: 0,
    clienteId: 1,
    dataVenda: 1,
    dataEntregaPrevista: 1
  } }
]);
