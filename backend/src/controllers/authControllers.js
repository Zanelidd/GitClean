const argon2 = require("argon2");
const models = require("../models");

const login = async (req, res) => {
  console.info(req.body);
  const [user] = await models.users.findOneByEmail(req.body.email);

  if (user[0]) {
    const check = await argon2.verify(user[0].password, req.body.password);
    const { firstname, admin, statut } = user[0];
    if (check) {
      res.status(200).json({ firstname, admin, statut });
    } else {
      res.status(401).json({ msg: "not connected" });
    }
  } else {
    res.status(401).json({ msg: "not connected" });
  }
};

module.exports = {
  login,
};
