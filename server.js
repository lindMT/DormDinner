const express = require("express");
const dotenv = require("dotenv"); // Import dotenv
dotenv.config(); // Load environment variables from .env file
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const route = require("./routes/route.js");
app.use('/', route);

const port = process.env.PORT || 3000; // Use environment variable or default to 3000
app.listen(port, function () {
    console.log(`DODODODORM DINNERRRRRRRRRR on port ${port}`);
});
