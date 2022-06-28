const ArgoModel = require("../models/argonautes");

module.exports.createArgonaute = async (req, res, next) => {
  const { name } = req.body;

  try {
    const argo = await ArgoModel.create({ name });
    res.status(201).json({ argo: argo._id });
  } catch (err) {
    res.status(200).send({ errors });
  }
};

module.exports.getAllArgos = async (req, res) => {
  const argos = await ArgoModel.find();
  res.status(200).json(argos);
};
