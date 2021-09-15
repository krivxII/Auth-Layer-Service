const schemas = {

    registrarSchema:{
        type: "object",
        properties: {
            correo: {type: "string"},
            token: {type: "string"}
        },
        required: ["correo","token"],
        additionalProperties: false,
        
    },

    validarSchema:{
        type: "object",
        properties: {
            numero: {type: "string"}
        },
        required: ["numero"],
        additionalProperties: false,
    }

}

module.exports = schemas