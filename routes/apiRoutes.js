const db = require("../models");
const axios = require("axios");
// const cheerio = require("cheerio");
// const mongoose = require("mongoose");
const scrape = require("../controllers/scrape");

module.exports = function (app) {

    app.get("/scrape", function (req, res) {

        scrape();
        // axios.get("https://www.npr.org").then(function (response) {

        //     const $ = cheerio.load(response.data);
        //     const results = [];

        //     $("h3.title" && "p.teaser").each(function (i, element) {

        //         results.title = $(this).text();
        //         results.link = $(this).parent().attr("href");
        //         results.teaser = $(this).text();

        //         if (results.title && results.link && results.teaser) {
        //             db.Article.create(results)
        //                 .then(function (dbArticle) {
        //                     // console.log(dbArticle);
        //                 })
        //                 .catch(function (err) {
        //                     console.log(err);
        //                 },
        //                     function (err, created) {
        //                         if (err) {
        //                             console.log(err);
        //                         } else {
        //                             console.log(created);
        //                         }
        //                     }
        //                 )
        //             console.log(results.title);
        //             console.log(results.link);
        //             console.log(results.teaser);

        //         }
        // });

        // $("p.teaser").each(function (i, element) {
        //     results.teaser = $(this).text();
        //     console.log(results.teaser);
        //     db.Article.create(results)
        //         .then(function (dbArticle) {
        //             // console.log(dbArticle);
        //         })
        //         .catch(function (err) {
        //             console.log(err);
        //         },
        //             function (err, created) {
        //                 if (err) {
        //                     console.log(err);
        //                 } else {
        //                     console.log(created);
        //                 }
        //             }
        //         )
        // })
    });
    // res.send("Scrape Complete");
}
