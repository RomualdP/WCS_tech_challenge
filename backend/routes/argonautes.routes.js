const express = require("express");
const router = express.Router();
const argonauteCtrl = require('../controllers/argonaute.controllers');


router.post("/", argonauteCtrl.createSauce); 
router.get('/', argonauteCtrl.getAllSauces );

module.exports = router;