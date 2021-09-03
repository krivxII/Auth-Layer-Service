
![class diagram](http://www.plantuml.com/plantuml/png/XP51JiCm44NtESKego1LFO1LLKLb0KZTK2umZKV5O7l2s2b5YBlZMata52fcENh_pxV_AaIKs3jRHHCjmPt1lQ13q0HhYu42QBAm9JaOpN9QRyW7V2KnMALf4nIWDbxJiOQl2j8Ss6Z8nhTTrznKtmCLpZO3sB54KF3W8-r9BhIdcoHPFkYbZnXobfOcnreXb2VkuuMWPH-5hIK94zwXroXh5Y5UZqoM5ezoQEmzsOva-ZBoUeF6Dhvt90mAjb6Cty-WpORZeapYZDQMFb3eUf9j-q8E6w7tdaAS9RHZ7sZcwHXBhmDQep7o66l7R25l1wjdVYFVx5X_WeB7mBxKXtndpF4xGcBpv5QL6gfCx7o-11XgLAee2XJKYqKVQBcia_HF9ilB4fKgcfiwNCMoIL5iAVj7LPHm4RVqo-HO_HHCKvXaT6nZIexh39s_V8gioElUsHy0.png)

```bash
@startuml
title Diagrama de Clases del Servidor de Mensajeria



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





index::startApp   ..>  servidor::startServer : "<<use>>"


servidor::startServer ..> rutasService::crearRouter : "<<use>>"

rutasService::crearRouter ..> controllers : "<<use>>"
rutasService::crearRouter ..> middlewares : "<<use>>"


controllers ..> mailHelper : "<<use>>"




middlewares ..> validator : "<<use>>"

validator ..> schemas : "<<use>>"
@enduml
```

[back](../../../../Diagramas.md)