const express = require("express");
const router = express.Router();
const Messages = require("../models/message")
const DB = require("../db")

const find = async() => {
    const msgs = await Messages.find().exec()
    return msgs
}

/* GET home page. */
router.get("/", async function (req, res, next) {
    const messages = await find()
    res.render("index", { title: "Mini Messageboard", messages: messages});
});

router.get("/new", function (req, res, next) {
    res.render("form", { title: "Mini message board" });
});

router.post("/new", async function (req, res, next) {
    DB.addMessage(req.body.username,req.body.messageBody)
    return res.redirect("/");
});

module.exports = router;
