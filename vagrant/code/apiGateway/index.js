import Express from "express"

const app = Express();
app.use(Express.json())
const puerto = process.env.PUERTO

app.put("/registrar",(req,res)=>{

    res.send("hellow")
})

app.listen(puerto,()=> console.log("asdasdasd"))