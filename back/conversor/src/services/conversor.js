const axios = require("axios");
const axiosInstance = axios.create({
  baseURL: "https://economia.awesomeapi.com.br",
});

async function convertTo(code, value) {
  console.log(code, value, "aqui");
  const response = await axiosInstance.get("/json/all");
  if (response && code) {
    return {
      convertedValue: (value / parseFloat(response.data[code].high)).toFixed(2),
      high: parseFloat(response.data[code].high).toFixed(2),
    };
  }
  return {};
}
async function allCurrencies() {
  const response = await axiosInstance.get("/json/all");
  if (response) {
    return Object.keys(response.data).map((value) => ({
      code: response.data[value].code,
      name: response.data[value].name,
    }));
  }
  return {};
}

module.exports = {
  convertTo,
  allCurrencies,
};
