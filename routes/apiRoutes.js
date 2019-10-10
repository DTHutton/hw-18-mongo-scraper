const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");
const mongoose = require("mongoose");

module.exports = function (app) {

    app.get("/scrape", function (req, res) {

        axios.get("https://www.npr.org").then(function (response) {

            const $ = cheerio.load(response.data);

            $("h3.title").each(function (i, element) {

                const results = [];

                results.title = $(this).text();
                results.link = $(this).parent().attr("href");

                if (results.title && results.link) {
                    db.Article.create(results)
                        .then(function (dbArticle) {
                            console.log(dbArticle);
                        })
                        .catch(function (err) {
                            console.log(err);
                        },
                            function (err, created) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log(created);
                                }
                            }
                        )
                    console.log(results.title);
                    console.log(results.link);
                }
            });
        });
        res.send("Scrape Complete");
    });
};
