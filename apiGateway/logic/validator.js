import Ajv from "ajv"
import schemas from "../schemas/schemas.js"


const ajv = new Ajv()
const validator = {

    validarCorreoToken(body) {

        const validate = ajv.compile(schemas.registrarSchema)
        const valid = validate(body)
        if (!valid) console.log(validate.errors)
        console.log("validarCorreoToken")
        return valid ? true : false

    },

    validarNumero(body) {

        const validate = ajv.compile(schemas.validarSchema)
        const valid = validate(body)
        if (!valid) console.log(validate.errors)
        console.log("validarNumero")
        return valid ? true : false


    }



}

export default validator