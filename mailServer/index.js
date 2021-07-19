const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendMail = require("./services/mailSender.js")

const server = express();
server.use(bodyParser.json());

server.use(cors());

server.post("/sendMail", async(req, res) => {
    await sendMail(req.body.number,req.body.mail);
    res.send("gogogo");
});



server.listen(process.env.PORT || 8080);