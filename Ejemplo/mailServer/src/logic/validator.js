const Ajv = require ("ajv")
const schemas = require ("../schemas/schemas.js")


const ajv = new Ajv()
module.exports = validator = {

    validarCorreoToken(body) {

        const validate = ajv.compile(schemas.mandarCorreoSchema)
        const valid = validate(body)
        if (!valid) console.log(validate.errors)
        console.log("validando")
        return valid ? true : false

    },



}

