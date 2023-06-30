const models = require("../models");
const { hashPassword } = require("../services/checkAuth");

const browse = (req, res) => {
  models.users
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addUser = async (req, res) => {
  const { firstname, lastname, email, password, isAdmin } = req.body;

  const hash = await hashPassword(password);

  models.users
    .insert({ firstname, lastname, email, hash, isAdmin })
    .then(([result]) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const editUser = (req, res) => {
  const users = req.body;

  users.id = parseInt(req.params.id, 10);

  models.users
    .update(users)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  addUser,
  editUser,
};
