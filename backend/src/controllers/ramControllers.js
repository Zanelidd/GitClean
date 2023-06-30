const models = require("../models");

const browse = (req, res) => {
  models.ram
    .findAll()
    .then(([rows]) => res.send(rows))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const { ram } = req.body;
  models.ram
    .add(ram)
    .then(([rows]) => {
      const { insertId } = rows;
      if (insertId) res.sendStatus(201);
      else res.status(500).send("La capacité de RAM n’a pas pu être ajoutée.");
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
