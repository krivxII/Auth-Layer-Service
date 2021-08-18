import Express from "express"
import cors from "cors"
import controllers from "./controllers/controllers.js"
import middlewares from "./middleware/middlewares.js"


const puerto = process.env.PORT || 8085
const app = Express();
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(cors())

app.post("/registrar", middlewares.registrarSchema,controllers.registarControler)

app.post("/validar", middlewares.validarSchema,controllers.validarControler)


app.listen(puerto, () => console.log(puerto))