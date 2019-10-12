const axios = require("axios");
const cheerio = require("cheerio");

const scrape = () => {

    axios.get("https://www.npr.org").then(function (res) {

        const $ = cheerio.load(res.data);
        console.log("scraping...");
        const results = [];

        $("div.story-text").each(function (i, element) {

            title = $(this).find("h3").text();
            link = $(this).find("h3").parent().attr("href");
            teaser = $(this).find("p").text();

            if (title && link && teaser) {
                const resObj = {
                    title,
                    teaser,
                    link
                };
                results.push(resObj);
            }
        });
        console.log(results);
        return results;
    });
};

module.exports = scrape;