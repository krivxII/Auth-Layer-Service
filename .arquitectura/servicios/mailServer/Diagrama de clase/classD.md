
![class diagram](http://www.plantuml.com/plantuml/png/VPDDZjim38NtEWNXRb8Wy06C89WYKw0jC9kc5-1OHAgCBBcaxAOeUlScX1rBGJ9UYj_Z3n_z90av3Pqt9hda2PuT7XWx14kmyoWaOCd3ddXqDlBb-OM2u97OeJ4zjczu8AW-dtecaVee5NnurW_-6W20rgC8S1mIiVctADh81Pl7GhJKeVF4ZmWyZZSXOxGIL2vOEbLJzJ4w2phafxvVVJnp4oNJH3FOHqxGmDUGw41yexsCJwpoMSz3Gj6rj5GKQvcGl-kuXQ2D8N7qdbWAliDWaNUHcU9kPYRfCjHb6r_8zyJbP1Jiopcq2aD77A61VM8N3cjeDU7r8U-aSzPw-erCZplPjp-fmnNJhu4ahPcaZq5e7UYKybmZUcSnBNjyZT63liwfViGt2glNQFz00zyaXbmlMcVkuquBkeRbkc1Jrp1x1z10jTaCGjjjTSRK-QQPxGQ0kjx25TV8R6OfdH4LN2wp2DzDe6X-1KsJML-cVuXfakmo2jdxgiN5noe5-Kv39gkfq79VDw1P8Whc_sP1PlqeUBsCCk7rMQ79_W8f2JoEHVI9WXqw_ny0.png)

```bash
@startuml
title Diagrama de Clases del Servidor de Mensajeria

package "Express.js" #DDDDDD {
    class router
}
package "cors" #DDDDDD {

}
package "nodemailer" #DDDDDD {

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
    void mandarCorreoController()
}




class "mailHelper" {
    void sendMail(numero : String, correo : String)
}

class "middlewares" {
    void mandarCorreoSchema(request,response,next)
}

class "validator" {
    bool validarCorreoToken(body : Json)
}

class "schemas" {
    mandarCorreoSchema
}


Express.js <.. servidor  : "<<use>>"


index::startApp   ..>  servidor::startServer : "<<use>>"

servidor ..> cors : "<<use>>"
servidor::startServer ..> rutasService::crearRouter : "<<use>>"

rutasService::crearRouter ..> controllers : "<<use>>"
rutasService::crearRouter ..> middlewares : "<<use>>"
rutasService ..> router : "<<use>>"


controllers ..> mailHelper : "<<use>>"



mailHelper ..> "nodemailer": "<<use>>"

middlewares ..> validator : "<<use>>"

validator ..> schemas : "<<use>>"
validator ..> ajv : "<<use>>"
@enduml
```

[back](../../../../Diagramas.md)