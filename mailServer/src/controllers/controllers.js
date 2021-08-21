const sendMail = require("../logic/mailSender.js")

const controllers = {
    
    async mandarCorreoController(req,res){
    
        console.log(req.body)
       
        console.log("TF")
        let x = await sendMail(req.body.numero,req.body.correo)
        console.log(x);
        res.sendStatus(x);
    
    
    }
}

module.exports =  controllers;