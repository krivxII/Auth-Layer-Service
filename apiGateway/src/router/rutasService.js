import controllers from "../controllers/controllers.js"
import middlewares from "../middleware/middlewares.js"
import Express from "express"

const erouter= Express.Router()

const router = {
    crearRouter() {
        erouter.post("/registrar",
            middlewares.registrarSchema,
            controllers.registarControler)

        erouter.post("/validar",
            middlewares.validarSchema,
            controllers.validarControler)
            
        return erouter
    }
};



export default router