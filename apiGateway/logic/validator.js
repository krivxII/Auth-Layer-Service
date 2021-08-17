
const validator={

    validarCorreoToken(body){
        
        console.log("valido")
        return (!(body.correo===undefined) && !(body.token===undefined)) ? true:false 
        
    },

    validarNumero(body){
        
        console.log("valido")
        return (!(body.numero===undefined)) ? true:false 
        
    }
   
    
    
}

export default validator