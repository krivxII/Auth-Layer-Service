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
    
    }

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
  
  }


  }

module.exports = redisClient
