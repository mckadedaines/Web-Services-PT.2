const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/motorcycle");

router.get("/", contactsController.getAll);

router.get("/:id", contactsController.getSingle);

router.post("/", contactsController.createJapMotorcycle);

router.post("/", contactsController.createItaMotorcycle);

router.post("/", contactsController.createGermMotorcycle);

router.put("/:id", contactsController.updateJapMotorcycle);

router.put("/:id", contactsController.updateItaMotorcycle);

router.put("/:id", contactsController.updateGermMotorcycle);

router.delete("/:id", contactsController.deleteMotorcycle);

module.exports = router;
