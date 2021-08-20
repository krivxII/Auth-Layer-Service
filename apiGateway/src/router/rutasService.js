import controllers from "../controllers/controllers.js"
import middlewares from "../middleware/middlewares.js"
import Express from "express"


const router = {
    router:Express.Router(),
    crearRouter() {
        this.router.post("/registrar",
            middlewares.registrarSchema,
            controllers.registarControler)

        this.router.post("/validar",
            middlewares.validarSchema,
            controllers.validarControler)
            
        return this.router
    }
};



export default router