const { default: mongoose } = require("mongoose");
const Message = require("./models/message")
require("dotenv").config();


const runDB = async() => {
   await mongoose.connect(process.env.CONNECTION_STRING)
   console.log("connected")
}

const addMessage = async(name,msg) => {
    const message = new Message({name:name,messageBody:msg})
    await message.save()
}

module.exports = {
    runDB,
    addMessage
}