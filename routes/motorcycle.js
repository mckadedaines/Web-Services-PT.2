const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/motorcycle");

router.get("/", contactsController.getAll);

router.get("/:id", contactsController.getSingle);

router.post("/", contactsController.createMotorcycle);

router.put("/:id", contactsController.updateMotorcycle);

router.delete("/:id", contactsController.deleteMotorcycle);

module.exports = router;
