const AbstractManager = require("./AbstractManager");

class StorageManager extends AbstractManager {
  constructor() {
    super({ table: "product" });
  }

  add(brandId, model, screenSize, networkId, osId) {
    return this.database.query(
      `INSERT INTO ${this.table} (brand_id, model, screen_size, network_id, os_id) VALUES (?, ?, ?, ?, ?)`,
      [brandId, model, screenSize, networkId, osId]
    );
  }
}

module.exports = StorageManager;
