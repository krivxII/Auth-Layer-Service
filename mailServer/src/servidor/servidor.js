const express = require("express")
const cors = require("cors")
const rutasService = require("../router/rutasService.js")

const app = express();

const servidor = {
     puerto : process.env.PORT || 8085,
      startServer(){
         app.use(Express.json())
         app.use(Express.urlencoded({ extended: true }))
         app.use(cors())
         app.use("/",rutasService.crearRouter())
         app.listen(this.puerto, () => console.log(this.puerto))
     }
}


module.exports = servidor