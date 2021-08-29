# Diagrama de clase



![imagen](http://www.plantuml.com/plantuml/png/VPJDZjiw38NtVWh2TvCBf47NGX1CaHdqPp6BILz0iGZN6LboAJbDKVJTwz2sHZIIyIQ8-V4S7KRCGuYQOj_Q8ZRH8ZmskYRTQZ08Uwi31Z1euO1qReodw-iND4qeYavNhxf6A9yk7M48crCeuRz7Vk1F0SDJ3G81oFSHgVZxrb5v4cnUU_O6Fz1WSPVGf_EYL1IZKzauWvToSZ_xnW37-zHrg_y7RgB256O6EqyH57nr4MkaHUyrEHAtp_tKHnru8XKAiufGqml75GsLTv6yjKX1y8HrSpNPZtNkIiMpjet9QaAH1_G5ROSf1JgsqVHaiKKN_ShrBPBdOAFkqHDfu_SwLDhelIT2lwhuGy4XKkDg1Zc8I-28V0G5WParJCg7wUjt_ufEAaWh1bPHOFdlLgD3qj6J6C_WSaJwFDUcau9Gc0JQnXYBlpJXhGcJfaFr0rkz8lpPOuZhWUky2xXsU8dBeRzFvxQCv-S-UczdaN6-O_IZDxz1mRVW7Ri9y9cdAPZC8_1PKgn58dudJirpVTj9s6usCDzu00NbTji7tEtA0UDzKMfU4W3OR7QGSAMo5P2jCy8DrtqMvPi2ZEQxerIsC5B-FiP-QP-axVjTsHsvsyKWtJXGRibCMa09BhbqivMIrtcXd-bnN_u_AC2Yo78mcYwXL4ol6PfkaK0aeKzdKNr0P_hM_WC0.png)

```bash
@startuml
title Diagrama de Clases del Servidor de Redis

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