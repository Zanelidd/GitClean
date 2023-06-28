const AbstractManager = require("./AbstractManager");

class NetworkManager extends AbstractManager {
  constructor() {
    super({ table: "network" });
  }
}

module.exports = NetworkManager;
