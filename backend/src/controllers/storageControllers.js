const models = require("../models");

const browse = (req, res) => {
  models.storage
    .findAll()
    .then(([rows]) => res.send(rows))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const { storage } = req.body;
  models.storage
    .add(storage)
    .then(([rows]) => {
      const { insertId } = rows;
      if (insertId) res.sendStatus(201);
      else
        res
          .status(500)
          .send("La capacité de stockage n’a pas pu être ajoutée.");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add,
};
