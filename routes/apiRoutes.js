const db = require("../models");
const axios = require("axios");
const scrape = require("../controllers/scrape");

module.exports = function (app) {

    app.get("/scrape", function (req, res) {

        scrape();

    });
    // res.send("Scrape Complete");
}
