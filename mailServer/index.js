const express = require("express");
const cors = require("cors");
const sendMail = require("./services/mailSender.js")

const server = express();
server.use(express.json());
server.use(cors());

const port = process.env.PORT || 8080

server.post("/sendMail", async(req, res) => {
    console.log(req.body)
    await sendMail(req.body.numero,req.body.correo);
    res.send("gogogo");
});



server.listen(port,()=> console.log(port));