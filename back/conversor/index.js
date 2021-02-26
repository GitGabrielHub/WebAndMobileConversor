const express = require("express");
const cors = require("cors");

const routes = require("./src/router");
const app = express();

app.use(cors());
app.use("/", routes);

app.listen(3333, () => console.log("Servidor iniciado"));
