const controllers = require("../controllers/controllers.js")
const middlewares = require("../middleware/middlewares.js")
const express = require("express")

const erouter =  express.Router();

const router ={

    crearRouter() {
        erouter.post("/mandarCorreo", 
        middlewares.mandarCorreoSchema,
        controllers.mandarCorreoController);
        return erouter
    }
}


module.exports = router