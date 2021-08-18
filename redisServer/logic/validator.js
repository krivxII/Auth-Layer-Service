const Ajv = require("ajv")
const schemas = require("../schemas/schemas.js")


const ajv = new Ajv()
const validator = {

    validarCorreoToken(body) {

        const validate = ajv.compile(schemas.registrarSchema)
        const valid = validate(body)
        if (!valid) console.log(validate.errors)
        console.log("validando")
        return valid ? true : false

    },

    validarNumero(body) {

        const validate = ajv.compile(schemas.registrarSchema)
        const valid = validate(body)
        if (!valid) console.log(validate.errors)
        console.log("validando")
        return valid ? true : false


    }



}

export default validator