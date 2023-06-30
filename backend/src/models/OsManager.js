const AbstractManager = require("./AbstractManager");

class OsManager extends AbstractManager {
  constructor() {
    super({ table: "os" });
  }

  add(version) {
    return this.database.query(
      `INSERT INTO ${this.table} (version) VALUES (?)`,
      [version]
    );
  }
}

module.exports = OsManager;
