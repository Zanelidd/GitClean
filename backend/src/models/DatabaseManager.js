const AbstractManager = require("./AbstractManager");

class DatabaseManager extends AbstractManager {
  constructor() {
    super({ table: "product" });
  }

  findAllWithAllColumns() {
    return this.database
      .query(`select p.id, b.name brand, p.model, p.screen_size screen, n.name network, o.version os, r.name ram, s.name storage from ${this.table} p
    inner join brand b on b.id = p.brand_id
    inner join network n ON n.id = p.network_id
    inner join os o ON o.id = p.os_id
    inner join product_ram pr on pr.product_id = p.id
    inner join ram r on r.id = pr.ram_id
    inner join product_storage ps on ps.product_id = p.id
    inner join storage s on s.id = ps.storage_id;`);
  }

  selectPhonewithInfos(state) {
    const { brand, model, os, screenSize, network, storage, ram } = state;
    return this.database.query(
      `SELECT b.name brandname,p.model model,p.screen_size screen ,n.name network ,o.version os, r.name ram ,r.valM, s.name storage ,s.valS from ${this.table} p
    inner join brand b on b.id = p.brand_id
    inner join network n ON n.id = p.network_id
    inner join os o ON o.id = p.os_id
    inner join product_ram pr on pr.product_id = p.id
    inner join ram r on r.id = pr.ram_id
    inner join product_storage ps on ps.product_id = p.id
    inner join storage s on s.id = ps.storage_id
    WHERE b.name  = ? AND p.model  = ? AND o.version  = ? AND p.screen_size  = ? AND n.name  = ? AND  s.name  = ?  AND  r.name  = ? `,
      [brand, model, os, screenSize, network, storage, ram]
    );
  }
}
module.exports = DatabaseManager;
