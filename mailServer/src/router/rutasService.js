const controllers = require("../controllers/controllers.js")
const middlewares = require("../middleware/middlewares.js")
const Express = require("express")

const erouter =  Express.Router();

const router ={

    crearRouter() {
        erouter.post("/mandarCorreo", 
        middlewares.mandarCorreoMiddleware,
        controllers.mandarCorreoController);
        return erouter
    }
}


module.exports = router