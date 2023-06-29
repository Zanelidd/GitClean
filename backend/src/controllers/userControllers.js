const models = require("../models");
const { hashPassword } = require("../services/checkAuth");

const addUser = async (req, res) => {
  const { firstname, email, password, admin, statut } = req.body;
  const hash = await hashPassword(password);

  models.users
    .insert({ firstname, email, hash, admin, statut })
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
  addUser,
  editUser,
};
