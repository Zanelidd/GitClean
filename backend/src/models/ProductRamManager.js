const AbstractManager = require("./AbstractManager");

class ProductRamManager extends AbstractManager {
  constructor() {
    super({ table: "product_ram" });
  }

  add(productId, ramId) {
    return this.database.query(
      `INSERT INTO ${this.table} (product_id, ram_id) VALUES (?, ?)`,
      [productId, ramId]
    );
  }
}

module.exports = ProductRamManager;
