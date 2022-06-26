const Argonaute = require("../models/argonautes");

exports.createArgonaute = (req, res, next) => {
  delete req.body._id;
  const argonaute = new Argonaute({
    ...req.body,
  });
  argonaute
    .save()
    .then(() => res.status(201).json({ mesage: "Argonaute enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllArgonautes = (req, res, next) => {
  Argonaute.find()
    .then((argonaute) => res.status(200).json(argonaute))
    .catch((error) => res.status(400).json({ error }));
};
