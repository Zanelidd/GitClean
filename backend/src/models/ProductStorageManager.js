const AbstractManager = require("./AbstractManager");

class ProductStorageManager extends AbstractManager {
  constructor() {
    super({ table: "product_storage" });
  }

  add(productId, storageId) {
    return this.database.query(
      `INSERT INTO ${this.table} (product_id, storage_id) VALUES (?, ?)`,
      [productId, storageId]
    );
  }
}

module.exports = ProductStorageManager;
