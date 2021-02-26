const conversor = require("../services/conversor");

async function convertTo(req, res) {
  try {
    const { code, value } = req.query;
    const response = await conversor.convertTo(code, value);
    res.json({ data: response });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error" });
  }
}

async function allCurrencies(req, res) {
  try {
    const response = await conversor.allCurrencies();
    console.log("requisição");
    res.json({ data: response });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error" });
  }
}

module.exports = {
  convertTo,
  allCurrencies,
};
