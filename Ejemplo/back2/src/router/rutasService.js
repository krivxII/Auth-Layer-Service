import controllers from "../controllers/controllers.js"
import express from "express"

const erouter= express.Router()

const router = {
    crearRouter() {
        erouter.post("/registrar",
            controllers.registarControler)

        erouter.post("/autenticar",
            controllers.autenticarControler)

        erouter.post("/autenticar2",
            controllers.autenticar2Controler)

        erouter.get("/validar",
            controllers.validarControler)

        erouter.delete("/destruir",
            controllers.destruirControler)
            
        return erouter
    }
};



export default router