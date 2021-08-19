import validator from "../logic/validator.js"

const middlewares={

  async  registrarSchema(req, res,next){
        console.log("registrarSchema")
        if (validator.validarCorreoToken(req.body)) {
           next();
        }
        else {
            res.sendStatus(400)
        }

    },

    async  validarSchema(req, res,next){
        console.log("validarSchema")
        if (validator.validarNumero(req.body)) {
           next();
        }
        else {
            res.sendStatus(400)
        }

    },


}

export default middlewares