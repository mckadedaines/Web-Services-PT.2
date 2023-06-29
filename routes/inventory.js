const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/inventory");

router.get("/", contactsController.getAll);

router.get("/:id", contactsController.getSingle);

router.post("/", contactsController.createCar);

router.post("/", contactsController.createTruck);

router.post("/", contactsController.createSuv);

router.post("/", contactsController.createElectric);

router.put("/:id", contactsController.updateCar);

router.put("/:id", contactsController.updateTruck);

router.put("/:id", contactsController.updateSuv);

router.put("/:id", contactsController.updateElectric);

router.delete("/:id", contactsController.deleteInventory);

module.exports = router;
