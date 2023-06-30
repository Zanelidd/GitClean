const models = require("../models");

const add = (req, res, next) => {
  const { brandId, model, screenSize, networkId, osId } = req.body;
  models.product
    .add(brandId, model, screenSize, networkId, osId)
    .then(([rows]) => {
      const { insertId } = rows;
      if (insertId) {
        req.body.productId = insertId;
        next();
      } else {
        res.status(500).send("L’appareil n’a pas pu être ajouté.");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
};
