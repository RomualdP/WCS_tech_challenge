const mongoose = require("mongoose");

const argoSchema = mongoose.Schema({
  name: { type: String, required: true }
});

const ArgoModel = mongoose.model("Argo", argoSchema);

module.exports = ArgoModel;