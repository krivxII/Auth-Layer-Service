
import helper from "../logic/helper.js"



const controllers = {

    async registarControler(req, res){
        console.log("registrar controller")
        
        const resultado = await helper.registrar(req.body)

        res.status(200).send(resultado);

    },

    async autenticarControler(req, res){
        console.log("autenticar controller")
        console.log(req.body)
        const response =await helper.autenticar(req.body)

        if (response===400) {res.sendStatus(400)} else {res.json(response)}
        
    },

    async validarControler(req, res){
        console.log("validarControler")
        console.log(req.headers.authorization)
        const response =await helper.validar(req.headers.authorization)

        if (response===400) {res.sendStatus(400)} else {res.json(response)}
        
    }


}

export default controllers;