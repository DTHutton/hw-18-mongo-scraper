const axios = require("axios");
const cheerio = require("cheerio");

module.exports = function (app) {

    app.get("/scrape", function (req, res) {
        const results = [];
        axios.get("https://www.npr.org").then(function (res) {

            const $ = cheerio.load(res.data);
            console.log("scraping...");


            $("div.story-text").each(function (i, element) {

                title = $(this).find("h3").text();
                link = $(this).find("h3").parent().attr("href");
                teaser = $(this).find("p").text();

                if (title && link && teaser) {
                    const articles = {
                        title,
                        teaser,
                        link
                    };
                    results.push(articles);
                }
            });
            // console.log(results);
            return results;
        }).then(results => {
            res.json(results);
        })

    });
}
