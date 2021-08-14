const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const redisClient = require("./services/redismodule.js")
const redis = require("redis");

const server = express();

function buscarElemento(elemento){
    let valor;
    redisClient.get(elemento, (err,data)=>{
        if(err) throw err;
        else if(data) {valor=data}
        else  {valor=0}
        }
    )
    return valor

}
server.use(bodyParser.json());

server.use(cors());

server.post("/buscar", async(req, res) => {
     res.send(buscarElemento("as"));
 });

 server.post("/colocar", async(req, res) => {
    redisClient.set(req.body.a, req.body.b)
    res.send("ok");
});

server.post("/set", async(req, res) => {

   console.log(redisClient.set("key", "value","EX",300, redis.print));
    res.send("gogogo");
});

server.listen(process.env.PORT || 80);