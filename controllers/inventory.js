const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db("Inventory")
    .collection("Cars")
    .find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection("Cars")
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};

const createCar = async (req, res) => {
  const contact = {
    Car: req.body.Car,
    Stock: req.body.Stock,
    Color: req.body.Color,
  };
  const response = await mongodb
    .getDb()
    .db("Inventory")
    .collection("Cars")
    .insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(response.error || "An error occurred creating contact.");
  }
};

const createTruck = async (req, res) => {
  const contact = {
    Truck: req.body.Truck,
    Stock: req.body.Stock,
    Color: req.body.Color,
  };
  const response = await mongodb
    .getDb()
    .db("Inventory")
    .collection("Cars")
    .insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(response.error || "An error occurred creating contact.");
  }
};

const createSuv = async (req, res) => {
  const contact = {
    SUV: req.body.SUV,
    Stock: req.body.Stock,
    Color: req.body.Color,
  };
  const response = await mongodb
    .getDb()
    .db("Inventory")
    .collection("Cars")
    .insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(response.error || "An error occurred creating contact.");
  }
};

const createElectric = async (req, res) => {
  const contact = {
    Electric: req.body.Electric,
    Stock: req.body.Stock,
    Color: req.body.Color,
  };
  const response = await mongodb
    .getDb()
    .db("Inventory")
    .collection("Cars")
    .insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(response.error || "An error occurred creating contact.");
  }
};

const updateCar = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    Car: req.body.Car,
    Stock: req.body.Stock,
    Color: req.body.Color,
  };
  const response = await mongodb
    .getDb()
    .db("Inventory")
    .collection("Cars")
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Error occurred updating contact.");
  }
};

const updateTruck = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    Truck: req.body.Truck,
    Stock: req.body.Stock,
    Color: req.body.Color,
  };
  const response = await mongodb
    .getDb()
    .db("Inventory")
    .collection("Cars")
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Error occurred updating contact.");
  }
};

const updateSuv = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    SUV: req.body.SUV,
    Stock: req.body.Stock,
    Color: req.body.Color,
  };
  const response = await mongodb
    .getDb()
    .db("Inventory")
    .collection("Cars")
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Error occurred updating contact.");
  }
};

const updateElectric = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    Electric: req.body.Electric,
    Stock: req.body.Stock,
    Color: req.body.Color,
  };
  const response = await mongodb
    .getDb()
    .db("Inventory")
    .collection("Cars")
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Error occurred updating contact.");
  }
};

const deleteInventory = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db("Inventory")
    .collection("Cars")
    .deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "Error occurred deleting the contact.");
  }
};

module.exports = {
  getAll,
  getSingle,
  createCar,
  createTruck,
  createSuv,
  createElectric,
  updateCar,
  updateTruck,
  updateSuv,
  updateElectric,
  deleteInventory,
};
