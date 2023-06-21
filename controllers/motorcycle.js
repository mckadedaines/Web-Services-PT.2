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
    .db()
    .collection("Motorcycles")
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};

const createMotorcycle = async (req, res) => {
  const contact = {
    Kawasaki: req.body.Kawasaki,
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

const updateMotorcycle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    Kawasaki: req.body.Kawasaki,
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
  createMotorcycle,
  updateMotorcycle,
  deleteMotorcycle,
};
