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

        if (response===400) {res.status(400).send("no hay token")} else {res.json(response)}
        
    }



}

export default controllers;