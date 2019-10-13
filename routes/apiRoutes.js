const db = require("../models");
const scrape = require("../scrape.js");

module.exports = function (app) {

    app.get("/scrape", function (req, res) {

        scrape();
        res.render().json();

    });
}
