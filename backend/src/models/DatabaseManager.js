const AbstractManager = require("./AbstractManager");

class DatabaseManager extends AbstractManager {
  constructor() {
    super({ table: "product" });
  }

  findOneById(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }
}

module.exports = DatabaseManager;
