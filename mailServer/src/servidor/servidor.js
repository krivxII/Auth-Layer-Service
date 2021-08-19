const Express = require("express")
const cors = require("cors")
const rutasService = require("../router/rutasService.js")


const servidor = {
     puerto : process.env.PORT || 8085,
     app : Express(),
      startServer(){
         this.app.use(Express.json())
         this.app.use(Express.urlencoded({ extended: true }))
         this.app.use(cors())
         this.app.use("/",rutasService)
         this.app.listen(this.puerto, () => console.log(this.puerto))
     }
}


module.exports = servidor