const AbstractManager = require("./AbstractManager");

class StorageManager extends AbstractManager {
  constructor() {
    super({ table: "storage" });
  }

  add(name) {
    return this.database.query(`INSERT INTO ${this.table} (name) VALUES (?)`, [
      name,
    ]);
  }
}

module.exports = StorageManager;
