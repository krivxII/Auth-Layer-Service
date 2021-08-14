const express = require("express");
const cors = require("cors");
const sendMail = require("./services/mailSender.js")

const server = express();
server.use(express.json());
server.use(cors());

const port = process.env.PORT || 8080

server.post("/sendMail", async(req, res) => {
    await sendMail(req.body.number,req.body.mail);
    res.send("gogogo");
});



server.listen(port,()=> console.log(port));