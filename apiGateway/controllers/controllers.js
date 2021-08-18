import redisHelper from "../logic/redisHelper.js"
import mailHelper from "../logic/mailHelper.js"

const controllers = {

    async registarControler(req, res){
        console.log("registrar controller")
        const numero = await redisHelper.registrarCredenciales(req.body)
        const resultado = await mailHelper.sendMail(numero, req.body.correo);
        res.sendStatus(200);

    },

    async validarControler(req, res){
        console.log("validarControler")
        console.log(req.body)
        res.json( await redisHelper.validarNumero(req.body.numero));

    }



}

export default controllers