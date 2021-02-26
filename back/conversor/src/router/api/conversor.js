// IMPORTS
const express = require("express");
const conversor = require("../../controllers/conversor");

const router = express.Router();

router.get("/convertTo", conversor.convertTo);
router.get("/allCurrencies", conversor.allCurrencies);

module.exports = router;
