const express = require("express");
const cors = require("cors");
const controllers = require("./controllers/controllers.js");
const middlewares =require("./middleware/middlewares.js");


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
server.use(cors());

app.post("/registrar", middlewares.registrarSchema,controllers.registarControler)

app.post("/validar", middlewares.validarSchema,controllers.validarControler)


app.listen(process.env.PORT || 80);