const AbstractManager = require("./AbstractManager");

class BrandManager extends AbstractManager {
  constructor() {
    super({ table: "brand" });
  }
}

module.exports = BrandManager;
