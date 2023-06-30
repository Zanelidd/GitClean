const models = require("../models");

const add = (req, res, next) => {
  const { productId, ramIds } = req.body;
  for (const ramId of ramIds) {
    models.product_ram
      .add(productId, ramId)
      .then(([rows]) => rows.affectedRows)
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
  next();
};

module.exports = {
  add,
};
