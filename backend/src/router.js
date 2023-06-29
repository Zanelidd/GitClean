const express = require("express");

const router = express.Router();

const osControllers = require("./controllers/osControllers");
const brandControllers = require("./controllers/brandControllers");
const networkControllers = require("./controllers/networkControllers");
const ramControllers = require("./controllers/ramControllers");
const storageControllers = require("./controllers/storageControllers");
const productControllers = require("./controllers/productControllers");
const productRamControllers = require("./controllers/productRamControllers");
const productStorageControllers = require("./controllers/productStorageControllers");
const authControllers = require("./controllers/authControllers");
const StateController = require("./controllers/stateController");
const databaseControllers = require("./controllers/databaseControllers");

const validateProduct = require("./services/validateProduct");

router.get("/os", osControllers.browse);
router.get("/brands", brandControllers.browse);
router.get("/networks", networkControllers.browse);
router.get("/rams", ramControllers.browse);
router.get("/storages", storageControllers.browse);
router.get("/state", StateController.findState);

router.post(
  "/products",
  validateProduct,
  productControllers.add,
  productRamControllers.add,
  productStorageControllers.add
);

router.post("/users", authControllers.login);

router.get("/database", databaseControllers.browsePhones);

module.exports = router;
