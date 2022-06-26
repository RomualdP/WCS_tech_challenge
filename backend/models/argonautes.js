const mongoose = require("mongoose");

const argonauteSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true }
});

module.exports = mongoose.model("Argonaute", argonauteSchema);