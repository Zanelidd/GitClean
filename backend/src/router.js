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
const screenController = require("./controllers/screenControllers");
const categoryController = require("./controllers/categoryController");
const usersControllers = require("./controllers/userControllers");

const validateProduct = require("./services/validateProduct");
const validateOs = require("./services/validateOs");
const validateBrand = require("./services/validateBrand");
const validateRam = require("./services/validateRam");
const validateStorage = require("./services/validateStorage");

router.get("/oss", osControllers.browse);
router.get("/brands", brandControllers.browse);
router.get("/networks", networkControllers.browse);
router.get("/rams", ramControllers.browse);
router.get("/storages", storageControllers.browse);
router.get("/state", StateController.findState);
router.get("/screens", screenController.findScreen);
router.get("/categories", categoryController.browse);

router.post("/oss", validateOs, osControllers.add);
router.post("/brands", validateBrand, brandControllers.add);
router.post("/rams", validateRam, ramControllers.add);
router.post("/storages", validateStorage, storageControllers.add);

router.post(
  "/products",
  validateProduct,
  productControllers.add,
  productRamControllers.add,
  productStorageControllers.add
);

router.post("/users", authControllers.login);

router.get("/database", databaseControllers.browsePhones);
router.post("/database", databaseControllers.selectPhones);

router.get("/users", usersControllers.browse);
router.post("/users/add", usersControllers.addUser);
router.put("/users/:id", usersControllers.editUser);

module.exports = router;
