const express = require("express");
const dormDinnerController = require('../controller/dormDinnerController.js');
const app = express();

// DORODODODODORM DINNER
app.get("/", dormDinnerController.getHome);
app.post("/getDishList", dormDinnerController.getDishList);

module.exports = app;