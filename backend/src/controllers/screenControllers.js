const models = require("../models");

const findScreen = (req, res) => {
  models.state
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  findScreen,
};
