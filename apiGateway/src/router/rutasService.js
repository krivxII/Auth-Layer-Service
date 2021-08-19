import controllers from "../controllers/controllers.js"
import middlewares from "../middleware/middlewares.js"
import Express from "express"

const router =  Express.Router();
router.post("/registrar", 
    middlewares.registrarSchema,
    controllers.registarControler)

router.post("/validar", 
    middlewares.validarSchema,
    controllers.validarControler)

export default router