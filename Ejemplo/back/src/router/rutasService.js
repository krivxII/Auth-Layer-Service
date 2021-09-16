import controllers from "../controllers/controllers.js"
import express from "express"

const erouter= express.Router()

const router = {
    crearRouter() {
        erouter.post("/registrar",
            controllers.registarControler)

        erouter.post("/autenticar",
            controllers.autenticarControler)

        erouter.post("/validar",
            controllers.validarControler)
            
        return erouter
    }
};



export default router