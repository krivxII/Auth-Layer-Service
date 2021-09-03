# Diagrama de clase

![imagen](http://www.plantuml.com/plantuml/png/VPFFRjim3CRlUGeY9nS8Yfs58kYG3VjpsA7P2oWMuGcJHO-Iimv3ttqEOskYrqMN8ERl-qYAr6FAblFOXqtsEI2yyxPZsrjm28TW4oPm6E28VFQE-FBv2PrFc-cqKpp1raU7prlulO7fdCax4C-tmz3SRLuMAiqE2pWGPp3mAMRia5VQIpfaaIzw7hDDKaQBAbdBQFc9nhmIj1GpKmZ8IV6CdRyaELpZeYh1imtUwLXLmgNnZnW6B5rWb3IMtmViCMPgujWZapHszJqHitLqiAcrpXw86QbfvSV0CREFdO3II2pW5Na31f8mEvYTZ_FVh_GTetRGgGHeiiPU_iwjmuXiCx6wdYdB2Vd34fih1UKm6_JUkO0_BUDhDyoMZ-qtx6t3-6F4b7SJDr1Ck8ludDUNVfkkqmfUrtqY2cLoKkwrzHEvNs3WSw9uzm_uHMvJCLME9BMKjbOToJTLzIIL8s_1cEK1JDZz_HvWMNvZglK60zk7Xp7XVh-TfAyo8gzNtvXgtxN3Vp4ngPw3ajrMLIDUbLlv2Laz3aMkkR9rnkXLqp8vLNRHbibhj7mMQ1wTGXunkh4FVm00.png)

```bash
@startuml
title Diagrama de Clases del Servidor de Redis



class "index" {
    void startApp()
}
class "servidor" {
    port : Integer
    void startServer()
}

class "rutasService" {
    void crearRouter()
}

class "controllers" {
    void registarControler()
    void validarControler()
}

class "redisHelper" {
    encontrarElemento(numero: Int)
    borradoCascadaCorreo(correo: String)
    creandoCascada(corre0 : string, numero:String, Token: String)
    borradoCascadaToken(token: String)
}


class "generator" {
    void numberGenerator(correo : String)
}

class "middlewares" {
    void registrarSchema(request,response,next)
    void validarSchema(request,response,next)
}

class "validator" {
    bool validarCorreoToken(body : Json)
    bool validarNumero(body : Json)
}

class "schemas" {
    registrarSchema
    validarSchema
}





index::startApp   ..>  servidor::startServer : "<<use>>"


servidor::startServer ..> rutasService::crearRouter : "<<use>>"

rutasService::crearRouter ..> controllers : "<<use>>"
rutasService::crearRouter ..> middlewares : "<<use>>"


controllers ..> redisHelper : "<<use>>"
controllers ..> generator::numberGenerator : "<<use>>"





middlewares ..> validator : "<<use>>"

validator ..> schemas : "<<use>>"
@enduml
```

[back](../../../../Diagramas.md)