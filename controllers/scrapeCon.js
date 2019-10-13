const db = require("../models");
const scrape = require("../scrape.js");

module.exports = {
    scrapedArticles: function (req, res) {
        return scrape()
            .then(function (articles) {
                return db.scrapedData.create(articles);
            })
            .then(function () {
                alert("scrape complete");
            });
    }
};