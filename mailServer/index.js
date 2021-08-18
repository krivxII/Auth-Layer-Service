const express = require("express");
const cors = require("cors");

const server = express();
const middlewares = require("./middleware/middlewares.js")
const controllers = require("./controllers/controllers.js")
server.use(express.json());
server.use(cors());

const port = process.env.PORT || 8080

server.post("/mandarCorreo", middlewares.mandarCorreoMiddleware,controllers.mandarCorreoController);



server.listen(port,()=> console.log(port));