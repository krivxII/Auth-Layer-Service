const redisHelper =require("../logic/redisHelper.js")
const generator = require("../logic/randomGenerator.js")

module.exports = controllers = {

    async registarControler(req, res){
        
        let numero = generator.numberGenerator(7)
        let flag = await redisHelper.encontrarElemento(numero)
        while(flag===1){
            numero = generator.numberGenerator(7)
            flag = await redisHelper.encontrarElemento(numero)
        }
        if(await redisHelper.encontrarElemento(req.body.correo)===1){
            await redisHelper.borradoCascadaCorreo(req.body.correo)
         }
         redisHelper.creandoCascada(req.body.correo,numero,req.body.token)
         res.json({"numero":numero});
        

    },

    async validarControler(req, res){
        const token = await redisHelper.buscarElemento(req.body.numero)
        if(token==="0"){
            console.log(12)
            res.sendStatus(400)
        }else{
           await redisHelper.borradoCascadaToken(token);
            res.json( {token:token});
        }

    }



}
