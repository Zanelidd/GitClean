const AbstractManager = require("./AbstractManager");

class ScreenManager extends AbstractManager {
  constructor() {
    super({ table: "screen" });
  }

  add(name) {
    return this.database.query(`INSERT INTO ${this.table} (name) VALUES (?)`, [
      name,
    ]);
  }
}

module.exports = ScreenManager;
