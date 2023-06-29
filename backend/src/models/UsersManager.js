const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  findOneByEmail(email) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ]);
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, email, password, admin, statut)`,
      [user.firstname, user.email, user.password, user.admin, user.statut]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, email = ?, password = ?, admin = ? ,statut = ? where id = ?`,
      [
        user.firstname,
        user.email,
        user.password,
        user.admin,
        user.statut,
        user.id,
      ]
    );
  }
}

module.exports = UsersManager;
