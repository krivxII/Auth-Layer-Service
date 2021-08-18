import validator from "../logic/validator.js"

const middlewares={

  async  registrarSchema(req, res,next){
        console.log("0")
        if (validator.validarCorreoToken(req.body)) {
           next();
        }
        else {
            res.sendStatus(400)
        }

    },

    async  validarSchema(req, res,next){
        console.log("0")
        if (validator.validarNumero(req.body)) {
           next();
        }
        else {
            res.sendStatus(400)
        }

    },


}

export default middlewares