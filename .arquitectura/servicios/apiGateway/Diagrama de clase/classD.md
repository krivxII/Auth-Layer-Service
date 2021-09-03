# Diagrama de clase



![imagen](http://www.plantuml.com/plantuml/png/XP9DJiCm48NtFOMLLIfLFK1KLKLi00aMb0kuyQXOE9umjaiHukuuRYt_K6XsyNnltepzDiPoicvGirvnOrWZjO1Zmxvcp7y7b885ucOSs_diEr86w205KWH79CiwTgyjx84gxTR3G44UzUGiDzEvxA4mwmauFQEpbQ17RGcL0Z85Jx2NaydjgJwfKl70bHIfLeq0GfexK2FGbOuz4W7wzRQMfDulc7O34CR_tuPFeTxMcFUEvWENweAt0IqUVUaipIoh6V951Yc4WWzESEbgYDEsVuM1jmJl3enTU6v4RM2XuMZhuQ_HoVQ4svI17Q9ALpwD-u9leDiTYay_-8D1FQ_0U5KbapnCc2MkLMyKpegflJHy8SHT5vFhiULopLXChQ-aN7hRPhLo1jRhnailCa6UPxRhKb2h3dzYeKcMuqBslofxuchSh5yWirGNPCsb05ODCwi0ncUkk7GyGUTtAf0DQE46zGC0.png)

```bash
@startuml
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





index::startApp   ..>  servidor::startServer : "<<use>>"


servidor::startServer ..> rutasService::crearRouter : "<<use>>"

rutasService::crearRouter ..> controllers : "<<use>>"
rutasService::crearRouter ..> middlewares : "<<use>>"


controllers ..> redisHelper : "<<use>>"
controllers ..> mailHelper : "<<use>>"


middlewares ..> validator : "<<use>>"

validator ..> schemas : "<<use>>"
@enduml
```

[back](../../../../Diagramas.md)