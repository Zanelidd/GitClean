const AbstractManager = require("./AbstractManager");

class RamManager extends AbstractManager {
  constructor() {
    super({ table: "ram" });
  }

  add(name) {
    return this.database.query(`INSERT INTO ${this.table} (name) VALUES (?)`, [
      name,
    ]);
  }
}

module.exports = RamManager;
