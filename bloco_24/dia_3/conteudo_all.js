use("sales")
/* db.inventory.updateOne(
  { _id: 1 },
  { $addToSet: {
    tags: { 
      $each: ["ssl", "security"] 
    }
  } }
);*/

db.inventory.find(
  { tags: { $all: [ "ssl", "security" ] } }
);