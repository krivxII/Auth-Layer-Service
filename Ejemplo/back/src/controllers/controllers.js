import redisHelper from "../logic/redisHelper.js"
import mailHelper from "../logic/mailHelper.js"

const controllers = {

    async registarControler(req, res){
        console.log("registrar controller")
        const numero = await redisHelper.registrarCredenciales(req.body)
        const resultado = await mailHelper.sendMail(numero, req.body.correo);
        res.status(200).send("correo y token registrados");

    },

    async validarControler(req, res){
        console.log("validarControler")
        console.log(req.body)
        const response =await redisHelper.validarNumero(req.body.numero)

        if (response===400) {res.sendStatus(400)} else {res.json(response)}
        
    }
    async autenticarControler(req, res){
        console.log("validarControler")
        console.log(req.body)
        const response =await redisHelper.validarNumero(req.body.numero)

        if (response===400) {res.sendStatus(400)} else {res.json(response)}
        
    }


}

export default controllers;