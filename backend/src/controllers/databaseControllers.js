const models = require("../models");

const browsePhones = (req, res) => {
  models.database
    .findAllWithAllColumns()
    .then(([rows]) => res.send(rows))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const readPhone = (req, res) => {
  models.database
    .find()
    .then(([rows]) => res.send(rows))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const selectPhones = (req, res) => {
  models.database
    .selectPhonewithInfos(req.body)
    .then(([rows]) => res.send(rows))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browsePhones,
  readPhone,
  selectPhones,
};
