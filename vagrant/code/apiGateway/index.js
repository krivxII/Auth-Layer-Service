import Express from "express"

const app = Express();

app.get("/",(req,res)=>{
    res.send("hellow")
})

app.listen(3000,()=> console.log("asdasdasd"))