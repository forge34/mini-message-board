const express = require("express");
const router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        date: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        date: new Date(),
    },
];

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
    res.render("form", { title: "Mini message board" });
});

router.post("/new", function (req, res, next) {
    messages.push({
        text: req.body.messageBody,
        user: req.body.username,
        date: new Date(),
    });
    return res.redirect("/");
});

module.exports = router;
