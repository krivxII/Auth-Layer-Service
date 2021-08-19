const middlewares = require("../middleware/middlewares.js")
const controllers = require("../controllers/controllers.js")
const Express = require("express")
const router =  Express.Router();

router.post("/mandarCorreo", 
    middlewares.mandarCorreoMiddleware,
    controllers.mandarCorreoController);


module.exports = router