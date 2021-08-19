const controllers = require("../controllers/controllers.js");
const middlewares =require("../middleware/middlewares.js");
const Express = require("express")
const router =  Express.Router();

router.post("/registrar", middlewares.registrarSchema,controllers.registarControler)
router.post("/validar", middlewares.validarSchema,controllers.validarControler)

module.exports = router