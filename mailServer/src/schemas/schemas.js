module.exports = {

    mandarCorreoSchema:{
        type: "object",
        properties: {
            numero: {type: "string"},
            correo: {type: "string"}
        },
        required: ["numero","correo"],
        additionalProperties: false,
        
    },


}

