const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const argonautesRoutes = require("./routes/argonautes.routes");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

mongoose
  .connect(
    `mongodb+srv://${process.env.mongoUsername}:${process.env.mongoPassword}@cluster0.oom1r.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use("/api/argonautes", argonautesRoutes);

module.exports = app;
