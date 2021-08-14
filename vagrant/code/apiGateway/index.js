import Express from "express"
import fetch from "node-fetch"
import cors from "cors"

const Redis_ruta= process.env.R_SERVER_URL || "http://192.168.56.1:8082/registrar"


const app = Express();
app.use(Express.json())
app.use(Express.urlencoded({extended: true}))
app.use(cors())
const puerto = process.env.PUERTO || 8085

app.post("/set", async (req,res)=>{

    if (!(req.body.correo===undefined) && !(req.body.token===undefined)){


        const response = await fetch(Redis_ruta, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(req.body),
          }).then(res => res.json().then(data => ({ ok: res.ok, status: res.status, body: data })));
      

        console.log(response);
        res.send(req.body);
    }
    else {
        res.sendStatus(400)
    }
})

app.delete("/validar/:numero",async (req,resp)=>{


})

app.listen(puerto,()=> console.log(puerto))