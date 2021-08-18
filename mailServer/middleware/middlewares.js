const validator = require("../logic/validator.js")

module.exports = {

    async mandarCorreoMiddleware(req, res, next) {

        console.log(" sss sss ")
        if (validator.validarCorreoToken(req.body)) {
            next();
        }
        else {
            res.sendStatus(400)
        }

    }

}