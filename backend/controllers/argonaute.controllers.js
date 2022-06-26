const Argonaute = require("../models/argonautes");


exports.createArgonaute = (req, res, next) => {
  const argonauteObject = JSON.parse(req.body.argonaute);
  const argonaute = new Argonaute({
    ...argonauteObject
  });
  argonaute
    .save()
    .then(() => res.status(201).json({ mesage: "Argonaute enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};


exports.getAllArgonautes = (req, res, next) => {
  Argonaute.find()
    .then((sauce) => res.status(200).json(sauce))
    .catch((error) => res.status(400).json({ error }));
};