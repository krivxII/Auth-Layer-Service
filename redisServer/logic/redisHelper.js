const redis = require("redis");

const redisClient = redis.createClient({ host:'redis', port: 6379 });

redisClient.on("error", function(error) {
    console.error(error);
  });

  const redisHelper ={

    async  encontrarElemento(elemento){
      // recibe un correo y retorna 1 de tener un registro, de lo contrario 0
          let valor;
          let promise = new Promise((resolve, reject) => {
              redisClient.get(elemento, (e, data) => {
                if(e){
                  reject(e);
                }
                resolve(data);
              });
            });
      
      
          valor = await promise.then((x)=>{return x})
          if (valor === null) return 0;
          return 1
      
      },
      async  buscarElemento(elemento){
        let valor;
        let promise = new Promise((resolve, reject) => {
            redisClient.get(elemento, (e, data) => {
              if(e){
                reject(e);
              }
              resolve(data);
            });
          });
    
    
        valor = await promise.then((x)=>{return x})
        if (valor === null) return "0";
        return valor
    
    },

    async  borrarElemento(elemento){
      let valor;
  
      let promise = new Promise((resolve, reject) => {
          redisClient.del(elemento, function(err, response) {
              if (response == 1) {
                  resolve(response)
              } else{
                  resolve(response);
              }
          })})
  
      console.log("borrando "+elemento )
      valor = await promise.then((x)=>{return x})
      console.log("borrado")
      return valor
  
  },
  
  async  borradoCascadaCorreo(correo){
    let numero = await buscarElemento(correo);
    let token =  await buscarElemento(numero);
    let x ;
    console.log(correo+" "+numero+" "+token)
    x =await borrarElemento(numero);
    x =await borrarElemento(correo);
    x= await borrarElemento(token);
},
async  borradoCascadaToken(token){
    let correo = await buscarElemento(token);
    let numero = await buscarElemento(correo);
    console.log(correo+" "+numero+" "+token)
    await borrarElemento(numero);
    await borrarElemento(correo);
    await borrarElemento(token);
},
async  creandoCascada(correo,numero,token){
    console.log(correo)
    console.log(numero)
    console.log(token)
    redisClient.set(correo, numero,"EX",300, redis.print)
    redisClient.set(numero, token,"EX",300, redis.print)
    redisClient.set(token, correo,"EX",300, redis.print)
}

  }

module.exports = redisClient
