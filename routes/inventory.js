const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/inventory");

router.get("/", contactsController.getAll);

router.get("/:id", contactsController.getSingle);

router.post("/", contactsController.createInventory);

router.put("/:id", contactsController.updateInventory);

router.delete("/:id", contactsController.deleteInventory);

module.exports = router;
