# Diagrama de clase



![imagen](http://www.plantuml.com/plantuml/png/VPHFZzf03CNl-HHMUg4IHJr726t5hlhdi8Ubwdt8M6dOoJZrJ2XLrU_UuFn97C7cWeX_xxsn6VCGek7OL2v9OXaTmcDf2ZQL0Olmmvc00ImwE22VIqjyVVs2jWn9KflyrHG8wTEbPWnXSmefl7kK1_ucq3vvQn20gOd8oRz9aHChTbvx9eiVk8suIvZJUL5AaYufBRt5Izgddwcq8FrzgklL-vRhgT0tCu0rSOGCllg81V92U-qSMUI3dfjeWamaHnMMCnf-aNQL82SVcPn33efdBCfhoBwhYseideqhhQvDZZAWB-Xg7Bj0Bp66dnnMw2EjV5CXapJM-Hw9sLZQcv0RQ_R4ZBJAvIE3G-JI5m9A8tu4E-GZP124MKFlVEY_VgTNzDf1HmcmYXgR_Mu5UcGJYTLusfGZykUXrfyKb4DlK9NMElnj66zDc0qVyfzOcHNZhmP3NBTSJJxWskCbBeV-DZsF5Nn-xYEH6qow-NQj7yd-WGo-1VAIfi1dcQPcfemWPndRMdGaxzIfPQxJJi9siu4mh6_hdswtJS3TBcqnsPSi6vO403QR7OouL8OLqD814S5rdrNvfe6Wyzt9ijd2QFlxcEHD-wHaRwkcEt9V9I3VED0yKfXn0JMuvCQRdMNwEY_yPtwYc_yFAZ19Pdq8Ebv2xJY-5gY_HGhHX3cTLVK1lMqgzny0.png)

```bash
@startuml
title Diagrama de Vlases del Servidor de Redis

package "Express.js" #DDDDDD {
    class router
}
package "cors" #DDDDDD {

}
package "Node-redis" #DDDDDD {

}
package "ajv" #DDDDDD {

}


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


Express.js <.. servidor  : "<<use>>"


index::startApp   ..>  servidor::startServer : "<<use>>"

servidor ..> cors : "<<use>>"
servidor::startServer ..> rutasService::crearRouter : "<<use>>"

rutasService::crearRouter ..> controllers : "<<use>>"
rutasService::crearRouter ..> middlewares : "<<use>>"
rutasService ..> router : "<<use>>"

controllers ..> redisHelper : "<<use>>"
controllers ..> generator::numberGenerator : "<<use>>"

redisHelper ..> "Node-redis": "<<use>>"



middlewares ..> validator : "<<use>>"

validator ..> schemas : "<<use>>"
validator ..> ajv : "<<use>>"
@enduml
```

[back](../../../../Diagramas.md)