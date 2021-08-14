import Express from "express"
import Fetch from "node-fetch"

const Mail_ruta= process.env.M_SERVER_URL || "http://localhost:4000/";
const Redis_ruta= process.env.R_SERVER_URL || "http://localhost:8085"


const app = Express();
app.use(Express.json())
app.use(Express.urlencoded({extended: true}))
const puerto = process.env.PUERTO || 8084

app.post("/registrar", async (req,res)=>{

    if (!(req.body.correo===undefined) && !(req.body.token===undefined)){

        let headers= {
            "Content-Type": "application/json"
          }
        
        var raw = JSON.stringify(req.body);

        var requestOptions = {
            method: 'PUT',
            headers: headers,
            body: raw,
            redirect: 'follow'
        };
        
        const response = await fetch(Redis_ruta+registrar, requestOptions)
            .then(res => res.json().then(data => ({ ok: res.ok, status: res.status, body: data })));

        console.log(req.body.b);
        res.send(req.body);
    }
    else {
        res.sendStatus(400)
    }
})

app.delete("/validar/:numero",async (req,resp)=>{
    

})

app.listen(puerto,()=> console.log(puerto))