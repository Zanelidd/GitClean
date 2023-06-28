const AbstractManager = require("./AbstractManager");

class OsManager extends AbstractManager {
  constructor() {
    super({ table: "os" });
  }
}

module.exports = OsManager;
