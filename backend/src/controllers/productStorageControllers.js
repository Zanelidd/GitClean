const models = require("../models");

const add = (req, res) => {
  const { productId, storageIds } = req.body;
  for (const storageId of storageIds) {
    models.product_storage
      .add(productId, storageId)
      .then(([rows]) => rows.affectedRows)
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
  res.sendStatus(201);
};

module.exports = {
  add,
};
