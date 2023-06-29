const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db("Inventory")
    .collection("Motorcycles")
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
    .db("Inventory")
    .collection("Motorcycles")
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};

const createJapMotorcycle = async (req, res) => {
  const contact = {
    Japanese_Bikes: req.body.Japanese_Bikes,
    Color: req.body.Color,
  };
  const response = await mongodb
    .getDb()
    .db("Inventory")
    .collection("Motorcycles")
    .insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(response.error || "An error occurred creating contact.");
  }
};

const createItaMotorcycle = async (req, res) => {
  const contact = {
    Italian_Bikes: req.body.Italian_Bikes,
    Color: req.body.Color,
  };
  const response = await mongodb
    .getDb()
    .db("Inventory")
    .collection("Motorcycles")
    .insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(response.error || "An error occurred creating contact.");
  }
};

const createGermMotorcycle = async (req, res) => {
  const contact = {
    German_Bikes: req.body.German_Bikes,
    Color: req.body.Color,
  };
  const response = await mongodb
    .getDb()
    .db("Inventory")
    .collection("Motorcycles")
    .insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(response.error || "An error occurred creating contact.");
  }
};

const updateJapMotorcycle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    Japanese_Bikes: req.body.Japanese_Bikes,
    Color: req.body.Color,
  };
  const response = await mongodb
    .getDb()
    .db("Inventory")
    .collection("Motorcycles")
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Error occurred updating contact.");
  }
};

const updateItaMotorcycle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    Italian_Bikes: req.body.Italian_Bikes,
    Color: req.body.Color,
  };
  const response = await mongodb
    .getDb()
    .db("Inventory")
    .collection("Motorcycles")
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Error occurred updating contact.");
  }
};

const updateGermMotorcycle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    German_Bikes: req.body.German_Bikes,
    Color: req.body.Color,
  };
  const response = await mongodb
    .getDb()
    .db("Inventory")
    .collection("Motorcycles")
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Error occurred updating contact.");
  }
};

const deleteMotorcycle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db("Inventory")
    .collection("Motorcycles")
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
  createJapMotorcycle,
  createItaMotorcycle,
  createGermMotorcycle,
  updateJapMotorcycle,
  updateItaMotorcycle,
  updateGermMotorcycle,
  deleteMotorcycle,
};
