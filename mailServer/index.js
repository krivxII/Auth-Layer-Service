const express = require("express");
const cors = require("cors");
const sendMail = require("./services/mailSender.js")

const server = express();
server.use(express.json());
server.use(cors());

const port = process.env.PORT || 8080

server.post("/sendMail", async(req, res) => {
    console.log(req.body)
    sendMail(req.body.numero,req.body.correo);
    console.log("TF")
    res.sendStatus(200);
});



server.listen(port,()=> console.log(port));