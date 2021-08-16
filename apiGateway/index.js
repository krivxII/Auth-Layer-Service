import Express from "express"
import fetch from "node-fetch"
import cors from "cors"

const Redis_ruta= process.env.URL_REDIS || "http://192.168.56.1:8082/registrar"
const Mail_ruta= process.env.URL_CORREO  || "http://192.168.56.1:8081/sendMail"
const puerto = process.env.PORT || 8085


const app = Express();
app.use(Express.json())
app.use(Express.urlencoded({extended: true}))
app.use(cors())

app.post("/set", async (req,res)=>{

    if (!(req.body.correo===undefined) && !(req.body.token===undefined)){

        
        const response = await fetch(Redis_ruta+"registrar", {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(req.body),
          }).then(res => res.json().then(data => ({ ok: res.ok, status: res.status, body: data })));
      

          console.log("response1-------------------------------------------");console.log(response);
        const response2 = await fetch(Mail_ruta+"sendMail", {
            timeout:2000,
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({"number":response.body.numero,"mail":req.body.correo}),
          });
      
        console.log("response2-------------------------------------------");
        console.log(response2);
        console.log("----------------------------------------------------------------------------------------");
        res.sendStatus(200);
    }
    else {
        res.sendStatus(400)
    }
})

app.post("/validar",async (req,res)=>{
   
    if (!(req.body.numero===undefined)){

        const response = await fetch(Redis_ruta+"validar", {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(req.body),
          }).then(res => res.json().then(data => ({ ok: res.ok, status: res.status, body: data })));
      


        console.log(response);
        console.log("----------------------------------------------------------------------------------------");
        res.json(response.body);
    }
    else {
        res.sendStatus(400)
    }




})

app.listen(puerto,()=> console.log(puerto))