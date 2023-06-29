const AbstractManager = require("./AbstractManager");

class DatabaseManager extends AbstractManager {
  constructor() {
    super({ table: "product" });
  }

  findAllWithAllColumns() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }
}

module.exports = DatabaseManager;
