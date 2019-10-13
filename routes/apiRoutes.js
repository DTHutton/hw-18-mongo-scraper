const router = require("express").Router();
const scrape = require("../controllers/scrapeCon.js");

router.get("/", scrape.scrapedArticles);

module.exports = router;