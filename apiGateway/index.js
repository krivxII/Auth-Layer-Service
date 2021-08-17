import Express from "express"
import fetch from "node-fetch"
import cors from "cors"
import validator from "./logic/validator.js"
import redisHelper from "./logic/redisHelper.js"
import mailHelper from "./logic/mailHelper.js"
const Redis_ruta= process.env.URL_REDIS || "http://192.168.56.1:8082/registrar"
const puerto = process.env.PORT || 8085


const app = Express();
app.use(Express.json())
app.use(Express.urlencoded({extended: true}))
app.use(cors())

app.post("/set", async (req,res)=>{

    if (validator.validarCorreoToken(req.body)){

        const numero = await redisHelper.registrarCredenciales(req.body)
        const resultado = await mailHelper.sendMail(numero,req.body.token);
        res.sendStatus(200);
    }
    else {
        res.sendStatus(400)
    }
})

app.post("/validar",async (req,res)=>{
   
    if (validator.validarNumero(req.body)){

        res.json(await redisHelper.validarNumero(req.body.numero));
    }
    else {
        res.sendStatus(400)
    }




})

app.listen(puerto,()=> console.log(puerto))