const express = require("express");
const router = express.Router();
const argonauteCtrl = require("../controllers/argonaute.controllers");

router.post("/", argonauteCtrl.createArgonaute);
router.get("/", argonauteCtrl.getAllArgos);

module.exports = router;
