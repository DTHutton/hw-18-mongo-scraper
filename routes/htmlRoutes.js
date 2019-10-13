const db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index");
    })

    app.get("/saved", function (req, res) {
        res.render("saved");
    })

    app.get("*", function (req, res) {
        res.render("404");
    });
};