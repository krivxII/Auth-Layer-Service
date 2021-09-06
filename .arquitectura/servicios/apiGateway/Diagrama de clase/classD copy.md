# Diagrama de clase



![imagen](http://www.plantuml.com/plantuml/png/jPJXRjGm3CU_zoci-tIJfZt0QPg6-098GuZZ1Rp4EpBIk7FICOHuT-9MNNtP3IGa-kMQ-E_VtxMjkyu5fOnzx5p4d64JagUd3Vpie3wF73nCYZV3i3thVYsgJF8OFCiY75WAxE1zAdGWQNBtLKmofI_vCXRCUXyS7Pav8PJFF9OcmN4gmZ6Iv2Ezq26eoTivhbbhy15Zy3PcYGE9gwcKNC1t5Eln97ZhM8GOTh0l4jBX70f_exGSNxfz77iItgRfPvLLuyMvnn1FE6PA_gQ6vbJhs9HWlw8FtaVwZaAd-Y8eU_ULUjmAFOoKotdL3PmodITwActnVrPRsrbUrWMuPOvhlxNSBzgcxItx7xNm3vdJcH7QLbcDzSXJBSjdjL-aTyTLQwe-qmRlTilQLjd5nHN0ih8riYvbjTrSNewPhgusDVMqHjFjmkvswvOsXDTb2Z5BRDF-acL6t9HhUQfykT9MtwhNDMomrb25ox0RtNgjedbQJONrILm88jqLu3jeHjC1V1fJOV04b8gWHtsD23Z4uD05Jj1Hyg2KXdLoLfKOKd01WUApehBrE8maavUBMAru1VylxZ7ujIah_0OJtID4pBCClF5fWOK7vTbvLeJ-omLAK_iY7u93GA1xSfKtbUgqlKetlACAbnbsXiKPA3-CUZsF9aECs5TK1Xn2MzejbyAziinsTR3N-JgK0oh4SJ-cK8zPtzDpIrrW3VUKCjwJ17oTRZVzdrmCmVfSrxUnZxy1.png)

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

class "percistenciaHelper" {
    void registar(correo : String, token: String)
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


controllers ..> percistenciaHelper: "<<use>>"
controllers ..> mailHelper : "<<use>>"


middlewares ..> validator : "<<use>>"

validator ..> schemas : "<<use>>"




note left of index::startApp
  Punto de entrada de la aplicacion 
end note

note left of servidor::startServer
  inicia el servidor en el puerto declarado
end note
note left of servidor::startServer
  inicia el servidor en el puerto declarado
end note

note left of rutasService::crearRouter
  Maneja las rutas del servidor
end note

note top of controllers 
  Contiene la logica a ejecutar en cada ruta
end note


note left of schemas
 Contiene los esquemas de las llamadas api
end note

note bottom of mailHelper 
 Se encarga de comunicarse con el servicio de mensajeria
end note

note bottom of percistenciaHelper 
 Se encarga de comunicarse con el servicio de percistencia
end note
@enduml
```

[back](../../../../Diagramas.md)