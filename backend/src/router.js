const express = require("express");

const router = express.Router();

const osControllers = require("./controllers/osControllers");
const brandControllers = require("./controllers/brandControllers");
const networkControllers = require("./controllers/networkControllers");
const ramControllers = require("./controllers/ramControllers");
const storageControllers = require("./controllers/storageControllers");

router.get("/os", osControllers.browse);
router.get("/brands", brandControllers.browse);
router.get("/networks", networkControllers.browse);
router.get("/rams", ramControllers.browse);
router.get("/storages", storageControllers.browse);

module.exports = router;
