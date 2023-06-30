require("dotenv").config();

const mysql = require("mysql2/promise");

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

// declare and fill models: that's where you should register your own managers

const models = {};

const OsManager = require("./OsManager");
const BrandManager = require("./BrandManager");
const NetworkManager = require("./NetworkManager");
const RamManager = require("./RamManager");
const StorageManager = require("./StorageManager");
const ProductManager = require("./ProductManager");
const ProductRamManager = require("./ProductRamManager");
const ProductStorageManager = require("./ProductStorageManager");
const DatabaseManager = require("./DatabaseManager");
const UsersManager = require("./UsersManager");
const StateManager = require("./StateManager");
const CategoryManager = require("./CategoryManager");

models.os = new OsManager();
models.os.setDatabase(pool);
models.brand = new BrandManager();
models.brand.setDatabase(pool);
models.network = new NetworkManager();
models.network.setDatabase(pool);
models.ram = new RamManager(pool);
models.ram.setDatabase(pool);
models.storage = new StorageManager();
models.storage.setDatabase(pool);
models.product = new ProductManager();
models.product.setDatabase(pool);
models.product_ram = new ProductRamManager();
models.product_ram.setDatabase(pool);
models.product_storage = new ProductStorageManager();
models.product_storage.setDatabase(pool);
models.state = new StateManager();
models.state.setDatabase(pool);
models.database = new DatabaseManager();
models.database.setDatabase(pool);
models.users = new UsersManager();
models.users.setDatabase(pool);
models.category = new CategoryManager();
models.category.setDatabase(pool);

// bonus: use a proxy to personalize error message,
// when asking for a non existing model

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
