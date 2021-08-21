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

class "servidor" {
port : Integer

void startServer()


}

class "index" {
void startApp()
}

class "rutasService" {
void crearRouter()
}

class "controllers" {
void registarControler(S)
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




index::startApp  ..>   servidor::startServer : "<<use>>"
Express.js <.. servidor  : "<<use>>"
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