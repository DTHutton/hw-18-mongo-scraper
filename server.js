const express = require("express");
const exphbs = require("express-handlebars");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

// Require all models
const db = require("./models");

//express 
const app = express();
const PORT = process.env.PORT || 8080;

// Handlebars
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");

// morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/mongoScrapeHomework", { useNewUrlParser: true });

// listen function
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});
