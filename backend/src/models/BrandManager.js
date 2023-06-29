const AbstractManager = require("./AbstractManager");

class BrandManager extends AbstractManager {
  constructor() {
    super({ table: "brand" });
  }

  add(name) {
    return this.database.query(`INSERT INTO ${this.table} (name) VALUES (?)`, [
      name,
    ]);
  }
}

module.exports = BrandManager;
