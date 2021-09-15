# Diagrama de clase

![imagen](http://www.plantuml.com/plantuml/png/VPFRZjCm48Rl-nIZNcMbQiMrjQeM5SJX0Y7A2qpZKR1mF67ib4LetvrqKWSxU_1D5Flx_pdOSnyJIXfxlqakUO9t3Zl17i4I73n6Yc39mv7ax5h7b-sl9AsBYKBhS3EjTi8YR5smzB25lnkOrfcT1RL-EmpDpUOnK_5YP5aoEB0aCF0f9Ef8LjfBL1ALPxsC2UES3LN1MY6KRpocbQ3ba8Iz9uaLBzIvIv33VAwgvV2CtjdYh78SYle_aXzeAOQ2HaDvxwcdaBW9Oq_2MjziVs8Hj7p0sAB50uiGDwr-31oJkD0fgFM41PoHDs0WAhE3g_Fn-lkTVrAe7UfG2ZIfnXx_Nrz7WGGJIzMbASg9v4C-ksOAfKCsw9srddwZq7ED5fHZ-uDwR8H-ZHJJRk863f5sWHxIklUlqsLOnSkyJym-cypzdKi_iVq31Zv73ZTFm2_QpOefOaJD9PUrhaZtggmdgIuT2MFo74pOxUqU8C-0CSKh1mFRkxinqdw_dQJFCYel9y2OujdN3YzYQb9CHILxNLLSyIhTma_9fpDIycjwUNl6h1vS5KPNaODgy_slq6LReUi5LiWz1Jls_Xy0.png)

```bash
@startuml
title Diagrama de Clases del Servicio de Percistencia



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


controllers ..> percistenciaHelper: "<<use>>"
controllers ..> generator::numberGenerator : "<<use>>"





middlewares ..> validator : "<<use>>"

validator ..> schemas : "<<use>>"
@enduml
```

[back](../../../../Diagramas.md)