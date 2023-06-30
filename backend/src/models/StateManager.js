const AbstractManager = require("./AbstractManager");

class StateManager extends AbstractManager {
  constructor() {
    super({ table: "state" });
  }
}

module.exports = StateManager;
