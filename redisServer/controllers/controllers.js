const redisHelper =require("../logic/redisHelper.js")
const mailHelper =require("../logic/mailHelper.js")
const generator = require("../logic/randomGenerator.js")

const controllers = {

    async registarControler(req, res){
        
        let numero = generator.numberGenerator(7)
        let flag = await encontrarElemento(numero)
        while(flag===1){
            numero = generator.numberGenerator(7)
            flag = await encontrarElemento(numero)
        }
        if(await encontrarElemento(req.body.correo)===1){
            await borradoCascadaCorreo(req.body.correo)
         }
         creandoCascada(req.body.correo,numero,req.body.token)
         res.json({"numero":numero});
        

    },

    async validarControler(req, res){
        console.log("1")
        const numero = await redisHelper.registrarCredenciales(req.body)
        const resultado = await mailHelper.sendMail(numero, req.body.correo);
        res.sendStatus(200);

    }



}

export default controllers