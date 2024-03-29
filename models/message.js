const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    name: String,
    messageBody: String,
    date: {
        type: String,
        default: new Date().toLocaleTimeString(),
        immutable: true,
    },
});

module.exports = mongoose.model("Message", MessageSchema);
