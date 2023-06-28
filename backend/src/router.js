const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const authControllers = require("./controllers/authControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.post("/users", authControllers.login);

module.exports = router;
