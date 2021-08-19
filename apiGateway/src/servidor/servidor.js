import express from "express"
import cors from "cors"
import rutasService from "../router/rutasService.js"


const servidor = {
     puerto : process.env.PORT || 8085,
     app : express(),
      startServer(){
         this.app.use(express.json())
         this.app.use(express.urlencoded({ extended: true }))
         this.app.use(cors())
         this.app.use("/",rutasService)
         this.app.listen(this.puerto, () => console.log(this.puerto))
     }
}


export default servidor