const controllers = require("../controllers/controllers.js");
const middlewares =require("../middleware/middlewares.js");
const Express = require("express")
const router =  Express.Router();

router.post("/registrar", middlewares.registrarSchema,controllers.registarControler)
router.post("/validar", middlewares.validarSchema,controllers.validarControler)

module.exports = router


const controllers = require("../controllers/controllers.js")
const middlewares = require("../middleware/middlewares.js")
const express = require("express")

const erouter =  express.Router();

const router ={

    crearRouter() {
        erouter.post("/registrar", middlewares.registrarSchema,controllers.registarControler)
        erouter.post("/validar", middlewares.validarSchema,controllers.validarControler)
        return erouter
    }
}


module.exports = router