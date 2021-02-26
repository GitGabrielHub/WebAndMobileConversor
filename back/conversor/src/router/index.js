const express = require("express");

const conversor = require("./api/conversor");

const router = express.Router();

router.use("/conversor", conversor);

module.exports = router;
