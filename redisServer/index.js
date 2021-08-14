const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const redisClient = require("./services/redismodule.js")
const generator = require("./services/randomGenerator.js")
const redis = require("redis");



const server = express();
server.use(express.json());
server.use(cors());

async function buscarElemento(elemento){
    let valor;
    let promise = new Promise((resolve, reject) => {
        redisClient.get(elemento, (e, data) => {
          if(e){
            reject(e);
          }
          resolve(data);
        });
      });


    valor = await promise.then((x)=>{return x})
    if (valor === null) return "0";
    return valor

}
async function encontrarElemento(elemento){
// recibe un correo y retorna 1 de tener un registro, de lo contrario 0
    let valor;
    let promise = new Promise((resolve, reject) => {
        redisClient.get(elemento, (e, data) => {
          if(e){
            reject(e);
          }
          resolve(data);
        });
      });


    valor = await promise.then((x)=>{return x})
    if (valor === null) return 0;
    return 1

}

async function borrarElemento(elemento){
    let valor;
    let promise = new Promise((resolve, reject) => {
        redisClient.del(elemento, (e, data) => {
          if(e){
            reject(e);
          }
          resolve(data);
        });
      });


    valor = await promise.then((x)=>{return x})
    return valor

}

async function borradoCascadaCorreo(correo){
    let numero = await buscarElemento(correo);
    let token =  await buscarElemento(numero);
    await borrarElemento(correo);
    await borrarElemento(numero);
    await borrarElemento(token);
}
async function borradoCascadaToken(Token){
    let correo = await buscarElemento(Token);
    let numero = await buscarElemento(correo);
    await borrarElemento(correo);
    await borrarElemento(numero);
    await borrarElemento(token);
}
async function creandoCascada(correo,numero,token){
    console.log(correo)
    console.log(numero)
    console.log(token)
    redisClient.set(correo, numero,"EX",300, redis.print)
    redisClient.set(numero, token,"EX",300, redis.print)
    redisClient.set(token, correo,"EX",300, redis.print)
}

server.post("/buscar", async(req, res) => {
     res.send(await buscarElemento("as"));
 });

 server.post("/registrar", async(req, res) => {
    //Se verifica que el Json tenga los elementos necesarios
    const numero = generator.numberGenerator(7)
    if (!(req.body.correo===undefined) && !(req.body.token===undefined)){
        //Se verifica si el correo tiene otra entrada 
        if(await encontrarElemento(req.body.correo)===1){
           await borradoCascadaCorreo(req.body.correo)
        }
        creandoCascada(req.body.correo,numero,req.body.token)
        res.send(numero);
    }
    else {
        res.sendStatus(400)
    }
});

server.post("/validar", async(req, res) => {
    //Se verifica que el Json tenga los elementos necesarios

    if (!(req.body.numero===undefined)){
        //Se verifica si el correo tiene otra entrada 
        const token = await encontrarElemento(req.body.numero)
        if(token===0){
            console.log(12)
            res.sendStatus(400)
        }else{
            borradoCascadaToken(token)
            res.send(token);
        }
    }
    else {
        console.log(123)
        res.sendStatus(400)
    }
});

server.post("/set", async(req, res) => {

   console.log(redisClient.set("key", "value","EX",300, redis.print));
    res.send("gogogo");
});

server.listen(process.env.PORT || 80);