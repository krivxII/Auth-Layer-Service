const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const redisClient = require("./services/redismodule.js")
const redis = require("redis");

const server = express();
server.use(bodyParser.json());

server.use(cors());

server.post("/sendMail", async(req, res) => {
    redisClient.set("key", "value", redis.print);
    res.send("gogogo");
});



server.listen(process.env.PORT || 8080);