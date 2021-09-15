import validator from "../logic/validator.js"

const middlewares={

  async  registrarSchema(req, res,next){
        console.log("registrarSchema")
        if (validator.validarCorreoToken(req.body)) {
           next();
        }
        else {
            res.status(400).send("wrong Json format")
        }

    },

    async  validarSchema(req, res,next){
        console.log("validarSchema")
        if (validator.validarNumero(req.body)) {
           next();
        }
        else {
            res.status(400).send("wrong Json format")
        }

    },


}

export default middlewares