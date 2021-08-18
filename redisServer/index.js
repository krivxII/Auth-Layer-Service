const express = require("express");
const cors = require("cors");
const controllers = require("./controllers/controllers.js");
const middlewares =require("./middleware/middlewares.js");


const server = express();
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
server.use(cors());

app.post("/registrar", middlewares.registrarSchema,controllers.registarControler)

app.post("/validar", middlewares.validarSchema,controllers.validarControler)


server.listen(process.env.PORT || 80);