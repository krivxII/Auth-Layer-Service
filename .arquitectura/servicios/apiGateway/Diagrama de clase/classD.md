# Diagrama de clase



![imagen](http://www.plantuml.com/plantuml/png/XPHHZjCm48RVSmehl7IbaWD4LRK8a029VQ1Sm6iFNRUE9uoTK8IuEwxRCB59QTxg-VxvPwpVVVH1KXWwM_LI7UKUHFt-r1DutnnyBLwzIv_uLOduAIkz5uH30Af-iq8XPUoyzeGQNd-3e5vk4V8m5gMgkZZLncaurLVt4OqMQTmtVRzwYDoLya2ZqKWJs2C5qOgFBi0UgD3k8WoKv9EUXY3z-TmeoCmKWQGlQTrCeD05Gck1VCOJxCtPvEsbVbPnSPJMQAuL8u0s_WFO7kXEHuL4W76zNI3ZzclXXWu8fz__6Zwb-gh0vhVSIMCNl3qu_JcMBjAvPJ73V97EQ6tXXoHOkXgIj5ClqCaLmVS1V5X7haVdOUtW5ChXxz5iUy43P-0PqVAL4m5-nIEurJFgdt7mJnxT0uFvLMKCU_WqoxHMkL4wowPELyoFIMoQHanH5R5_lTaC7hRREc8fw6qxfJksQfgj-8l72cStbqv84YWadvKN6oHq7lgsvQGNxMzZoOyVGYRxluepSbkLG5eOQ6wP67uv6LXo7FAytrmVkUmFAmEvmHsEjqlW5Ct2bu_Fq3LR6P8JyZ1crKTmUkZi7m00.png)

```bash
@startuml
package "Express.js" #DDDDDD {
    class router
}
package "cors" #DDDDDD {

}
package "Node-fetch" #DDDDDD {

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
    void registarControler(correo : String, numero: String)
    void validarNumero(numero: String)
}


class "mailHelper" {
    void sendMail(numero : String, correo : String)
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
controllers ..> mailHelper : "<<use>>"

redisHelper ..> "Node-fetch": "<<use>>"

mailHelper ..> "Node-fetch": "<<use>>"

middlewares ..> validator : "<<use>>"

validator ..> schemas : "<<use>>"
validator ..> ajv : "<<use>>"
@enduml
```

[back](../../../../Diagramas.md)